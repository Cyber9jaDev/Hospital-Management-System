import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Billing,
  BillingDashboard,
  BillingLayout,
  PatientsBilling,
  CompleteProfile,
  Dispensing,
  EmailConfirmation,
  Insurance,
  Login,
  PatientDetails,
  Patients,
  Report,
  Signup_Patient,
  Signup_Staff_Checkbox,
  Signup_Staff_Dropdown,
  SplashScreen,
  PharmacyDashboard,
  Inventory,
  NewStock,
  NewSupplier,
  Prescriptions,
  PrescriptionDetails,
  HelpAndSupport,
  Settings,
  MedicationOrders,
  OrderDetails
} from "./pages";
import PharmacyLayout from "./pages/modules/Pharmacy/PharmacyLayout";

const RouterLinks = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="splash-screen" element={<SplashScreen />} />
        <Route path="login" element={<Login />} />
        <Route path="signup/staff/dropdown" element={<Signup_Staff_Dropdown />} />
        <Route path="signup/staff/checkbox" element={<Signup_Staff_Checkbox />} />
        <Route path="signup/patient" element={<Signup_Patient />} />
        <Route path="email-confirmation" element={<EmailConfirmation />} />
        <Route path="complete-profile" element={<CompleteProfile />} />
        
        {/* Pharmacy Module */}
        <Route path="pharmacy" element={<PharmacyLayout/>} >
          <Route index element={<PharmacyDashboard />} />
          <Route path="dashboard" element={<PharmacyDashboard />} />
          <Route path="dispensing" element={<Dispensing />} />
          <Route path="billing" element={<Billing />} />
          <Route path="patients">
            <Route index element={<Patients />} />
            <Route path='patient-details/:UHID' element={<PatientDetails />} />
          </Route>
          <Route path="inventory">
            <Route index element={<Inventory />} />
            <Route path="new-stock" element={<NewStock />} />
            <Route path="new-supplier" element={<NewSupplier />} />
          </Route>
          <Route path="prescriptions">
            <Route index element={<Prescriptions />} />
            <Route path='prescription-details/:UHID' element={<PrescriptionDetails />} />
          </Route>
          <Route path="support" element={<HelpAndSupport />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Billing Module */}
        <Route path='/billing' element={<BillingLayout />}>
          <Route index element={<BillingDashboard />} />
          <Route path="orders">
            <Route index element={<MedicationOrders />} />
            <Route path='order-details/:UHID' element={<OrderDetails />} />
          </Route>
          {/* <Route path="orders" element={<MedicationOrders />} /> */}
          <Route path="insurance" element={<Insurance />} />
          <Route path="report" element={<Report />} />
          <Route path="patients" element={<PatientsBilling />} />
          <Route path="support" element={<HelpAndSupport />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterLinks;
