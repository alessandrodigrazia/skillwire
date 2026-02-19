import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { verifyDownloadToken, DOWNLOADABLE_SLUGS } from "@/lib/download";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const { searchParams } = request.nextUrl;
  const slug = searchParams.get("slug") ?? "";
  const expStr = searchParams.get("exp") ?? "";
  const exp = parseInt(expStr, 10);

  if (!slug || !expStr || isNaN(exp)) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  if (!DOWNLOADABLE_SLUGS.has(slug)) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }

  if (!verifyDownloadToken(token, slug, exp)) {
    return NextResponse.json(
      { error: "Invalid or expired download link" },
      { status: 403 }
    );
  }

  // File is in public/downloads/ — served via filesystem (not the Next.js public path)
  const filePath = path.join(process.cwd(), "public", "downloads", `${slug}.zip`);

  try {
    const fileBuffer = await readFile(filePath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${slug}.zip"`,
        "Content-Length": fileBuffer.length.toString(),
        // Prevent caching of download links
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
