import { InventoryStatus, MedicationOrders, PaymentHistory, PharmacyOverview } from "../../../components/modules"
import QuickLinks from "../../../components/reusables/QuickLinks"

const Dashboard = () => {
  const Quicklinks = [
    { url: '/pharmacy/prescriptions', title: 'Prescription'},
    { url: '/pharmacy/dispensing', title: 'Dispensing'},
    { url: '/pharmacy/inventory', title: 'Inventory'},
    { url: '/pharmacy/billing', title: 'Billings'},
    { url: '/pharmacy/support', title: 'Help and Support'},
  ]
  return (
    <main className="flex flex-wrap">
      <PharmacyOverview />
      <InventoryStatus />
      <MedicationOrders />
      <PaymentHistory />
      <QuickLinks Links={ Quicklinks }/>
    </main>
  )
}

export default Dashboard