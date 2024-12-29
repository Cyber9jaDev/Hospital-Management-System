import { profileLarge as profileImage } from "../../../../../assets";

const PatientProfile = () => {
  return (
    <section className="px-3 py-6 w-full lg:w-[38%] border rounded-[10px] shadow-variant-1">
      <div className="text-primary-800 flex items-center gap-x-3">
        <img src={profileImage} alt="profile picture" className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]" />
        <div className="flex flex-col gap-y-2">
          <h1 className="font-bold text-2xl md:text-[38px]">John Kuble</h1>
          <a href="mailto:johnkuble@gmail.com" className="w-fit">johnkuble@gmail.com</a>
        </div>
      </div>
      <div className="text-primary-300 mt-8">
        <div className="flex flex-wrap gap-x- gap-y-5">
          <div className="w-1/2 md:w-[32%]">
            <p className="lg:text-center">UHID</p>
            <p className="lg:text-center text-primary-800 text-sm">ABCD12345678</p>
          </div>
          <div className="w-1/2 md:w-[32%]">
            <p className="lg:text-center">Gender</p>
            <p className="lg:text-center text-primary-800 text-sm">Male</p>
          </div>
          <div className="w-1/2 md:w-[32%]">
            <p className="lg:text-center">Date of Birth</p>
            <p className="lg:text-center text-primary-800 text-sm">14-07-1993</p>
          </div>
          <div className="w-1/2 md:w-[32%]">
            <p className="lg:text-center">Phone number</p>
            <p className="lg:text-center text-primary-800 text-sm">0244 444 4444</p>
          </div>
          <div className="w-1/2 md:w-[32%]">
            <p className="lg:text-center">Status</p>
            <p className="lg:text-center text-sm text-info">Out Patient</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientProfile;