
import { BillingOverview, BillingSummary, TopBilledInsurance, TotalProfit } from "../../../components/modules";
import QuickLinks from "../../../components/reusables/QuickLinks";

const BillingDashboard = () => {

  const Quicklinks = [
    { url: '/billing/insurance', title: 'Insurance Claims'},
    { url: '/billing/orders', title: 'Orders'},
    { url: '/billing/report', title: 'Report'},
    { url: '/billing/support', title: 'Help and Support'},
  ]

  return (
    <main className="flex flex-wrap">
      <BillingOverview />
      <BillingSummary />
      <TotalProfit />
      <TopBilledInsurance/>
      <QuickLinks Links={ Quicklinks }/>
    </main>
  )
}

export default BillingDashboard;