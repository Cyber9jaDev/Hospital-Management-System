export const formatCurrency = (amount) => {
  const _amount = new Intl.NumberFormat('en-GH', {
    notation: 'standard',
    style: 'currency',
    currency: "GHS",
    currencyDisplay: 'symbol',
    maximumFractionDigits: 2,
  }).format(amount);
  const splitValue = _amount.split('₵');
  return `${splitValue[0]}₵ ${splitValue[1]}`;
}

export const getPathName = () => {
  const { pathname } = window.location
  if(pathname === '/') return 'Dashboard';
  const _path = pathname.split('/')[1];
  return _path.charAt(0).toUpperCase() + _path.slice(1);
}

export const customStatusStyle = (status) => {
  if(status === 'Available' || status === 'Paid' || status === 'Dispensed' || status === 'Verified' || status === 'Claimed') return 'text-success'
  else if(status === 'Low on stock' || status === "Pending Payment" || status === "Pending payment" || status === "Pending Verification" || status === "In Patient" || status === "Pending") return 'text-warning'
  else if(status === 'Ready to Dispense' || status === 'Out Patient') return 'text-info'
  else if(status === "Out of stock" || status === 'Expired') return "text-error"
}