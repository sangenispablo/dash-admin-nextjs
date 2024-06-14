import { lusitana } from "../../ui/fonts";

import { fetchRevenue, fetchLatestInvoices } from "../../lib/data";

import RevenueChart from "../../ui/dasboard/revenue-chart";
import LatestInvoices from "../../ui/dasboard/latest-invoices";
import CardWrapper from "../../ui/dasboard/cards";

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
