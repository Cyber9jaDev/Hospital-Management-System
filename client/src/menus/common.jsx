import { logoutDeepIcon, logoutLightIcon, settingsLightIcon } from "../assets";

const common = [
  { 
    label: "Settings", 
    url: "/settings", 
    icon__light: <img src={settingsLightIcon} alt="settings icon" />, 
    icon__deep: <img src={settingsLightIcon} alt="settings icon" />
  },
  { 
    label: "Logout", 
    url: "/logout", 
    icon__light: <img src={logoutLightIcon} alt="logout icon" />, 
    icon__deep: <img src={logoutDeepIcon} alt="logout icon" /> 
  },
];

export default common;
