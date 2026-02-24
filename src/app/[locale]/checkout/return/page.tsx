import { redirect } from "next/navigation";
import { CheckoutReturnClient } from "./CheckoutReturnClient";

export default async function CheckoutReturnPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { locale } = await params;
  const { state_id, plan_id } = await searchParams;

  if (!state_id || !plan_id) {
    redirect(`/${locale}/skills`);
  }

  return (
    <CheckoutReturnClient
      stateId={state_id}
      planId={plan_id}
      locale={locale}
    />
  );
}
