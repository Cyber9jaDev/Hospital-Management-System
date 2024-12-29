import { appleIconLarge } from "../../assets";

const SplashScreen = () => {
  return (
    <main className="flex flex-col gap-y-6 h-screen w-full justify-center items-center">
      <img src={appleIconLarge} alt="splash screen" />
      <p className="text-primary-base text-1xl lg:text-3xl font-bold font-lato">Hospital Management System</p>
    </main>
  );
}

export default SplashScreen;