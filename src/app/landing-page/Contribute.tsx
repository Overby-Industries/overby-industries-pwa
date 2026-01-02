import SignupForm from "./SignupForm";
import DonateButton from "../components/DonateButton";
import CustomDonateForm from "../components/CustomDonateForm";

export default function Contribute() {
  return (
    <section id="contribute" className="px-4 py-4 text-center">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join the Mission</h2>
      <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-300">
        Be part of humanity’s next great leap. Whether as a small donor fueling
        our first prototypes with hands on experience that you bring to the
        table, or a major investor partnering for the future, your support
        powers Overby Industries. Every contribution, no matter how small, helps
        us take steps toward a sustainable future in space. Join the early
        supporters and be part of Overby Industries from the beginning.
      </p>
      <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row">
        <div className="flex justify-center gap-4">
          <CustomDonateForm />
          <DonateButton amount={500} />
          <DonateButton amount={1000} />
          <DonateButton amount={2000} />
          <DonateButton amount={10000} />
        </div>
        <SignupForm />
      </div>
    </section>
  );
}
