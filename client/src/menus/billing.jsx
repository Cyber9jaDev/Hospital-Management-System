import { dashBoardDeepIcon, dashBoardLightIcon, insuranceDeepIcon, insuranceLightIcon, ordersDeepIcon, ordersLightIcon, patientsDeepIcon, patientsLightIcon, reportDeepIcon, reportLightIcon} from "../assets";

const billing = [
  { 
    url: "",
    label: "Dashboard", 
    icon__light: <img src={dashBoardLightIcon} alt="dashboard icon" />, 
    icon__deep: <img src={dashBoardDeepIcon} alt="dashboard icon" />
  },
  { 
    label: "Orders", 
    url: "orders",
    icon__light: <img src={ordersLightIcon} alt="orders icon" />, 
    icon__deep: <img src={ordersDeepIcon} alt="orders icon" />
  },
  { 
    label: "Patients", 
    url: "patients", 
    icon__light: <img src={patientsLightIcon} alt="patients icon" />, 
    icon__deep: <img src={patientsDeepIcon} alt="patients icon" />
  },
  { 
    label: "Insurance", 
    url: "insurance", 
    icon__light: <img src={insuranceLightIcon} alt="insurance icon" />, 
    icon__deep: <img src={insuranceDeepIcon} alt="insurance icon" />
  },
  { 
    label: "Report", 
    url: "report", 
    icon__light: <img src={reportLightIcon} alt="report icon" />, 
    icon__deep: <img src={reportDeepIcon} alt="report icon" />
  },
];

export default billing;
