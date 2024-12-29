import { billingDeepIcon, billingLightIcon, dashBoardDeepIcon, dashBoardLightIcon, dispenseDeepIcon, dispenseLightIcon, inventoryDeepIcon, inventoryLightIcon, patientsDeepIcon, patientsLightIcon, prescriptionDeepIcon, prescriptionLightIcon } from "../assets";

const pharmacy = [
  { 
    url: "",
    label: "Dashboard", 
    icon__light: <img src={dashBoardLightIcon} alt="dashboard icon" />, 
    icon__deep: <img src={dashBoardDeepIcon} alt="dashboard icon" />
  },
  { 
    label: "Dispensing", 
    url: "dispensing",
    icon__light: <img src={dispenseLightIcon} alt="dispensing icon"/>, 
    icon__deep: <img src={dispenseDeepIcon} alt="dispensing icon"/>
  },
  { 
    label: "Patients", 
    url: "patients",
    icon__light: <img src={patientsLightIcon} alt="patients icon"/>, 
    icon__deep: <img src={patientsDeepIcon} alt="patients icon"/>
  },
  {
    label: "Prescriptions", 
    url: "prescriptions",
    icon__light: <img src={prescriptionLightIcon} alt="prescription icon" />, 
    icon__deep: <img src={prescriptionDeepIcon} alt="prescription icon" />
  },
  { 
    label: "Inventory", 
    url: "inventory", 
    icon__light: <img src={inventoryLightIcon} alt="inventory icon" />, 
    icon__deep: <img src={inventoryDeepIcon} alt="inventory icon" />
  },
  { 
    label: "Billing", 
    url: "billing", 
    icon__light: <img src={billingLightIcon} alt="billing icon" />, 
    icon__deep: <img src={billingDeepIcon} alt="billing icon" />
  },
];

export default pharmacy;
