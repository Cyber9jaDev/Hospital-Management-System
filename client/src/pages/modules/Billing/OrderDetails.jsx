import { printer } from "../../../assets";
import { PatientOrderDetails, OrderDetailsTable, PaymentModeSelect } from "../../../components/modules";

const OrderDetails = () => {
  return (
    <section>
      <PatientOrderDetails />

      <div className="w-full flex items-center justify-end gap-x-6 my-6">
        <PaymentModeSelect />
        <button className="bg-primary-base rounded-md px-3 py-2 text-sm text-white font-[500] h-fit">Apply Discount</button>
        <button className="flex rounded-md border border-primary-base text-primary-base text-sm font-[500] px-6 py-2">
          <img src={printer} alt="printer-icon" className="w-5 h-5 mr-1.5"/> Print
        </button>
      </div>

      <OrderDetailsTable />

      <div className="flex justify-center w-full mt-5">
        <button className="bg-primary-base rounded-md w-[335px] py-2 text-white">Receive payment</button>
      </div>
    </section>
  )
}

export default OrderDetails;