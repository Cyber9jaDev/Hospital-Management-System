/* eslint-disable react/prop-types */

const StatusButton = ({ selectedStatus, status, statusKey, setSelectedStatus }) => {

  return (
    <button 
      className={`${selectedStatus === statusKey ? 'bg-deep-red-base text-white' : 'text-inherit'} w-full flex items-center gap-2 p-2 rounded-md `}
      onClick={() => { setSelectedStatus(statusKey) }}>
      { selectedStatus === statusKey && <i className="fa-solid fa-check"></i> } <span>{status}</span>
    </button>
  )
}

export default StatusButton