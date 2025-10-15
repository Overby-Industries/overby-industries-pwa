import SignupForm from './SignupForm';
import DonateButton from '../components/DonateButton';
import CustomDonateForm from '../components/CustomDonateForm';

export default function Contribute() {
  return (
    <section id="contribute" className="py-4 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Mission</h2>
      <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
        Be part of humanity’s next great leap. Whether as a small donor fueling
        our first prototypes, or a major investor partnering for the future,
        your support powers Overby Industries. Every contribution, no matter how
        small, helps us take steps toward a sustainable future in space. Join
        the early supporters and be part of Overby Industries from the
        beginning.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex gap-4 justify-center">
          <CustomDonateForm />
          <DonateButton amount={500} /> {/* $5 */}
          <DonateButton amount={2000} /> {/* $20 */}
          <DonateButton amount={10000} /> {/* $100 */}
        </div>
        <a
          href="#"
          className="px-4 py-4 rounded-lg border border-cyan-400 hover:bg-cyan-400/10 transition text-xl font-semibold"
        >
          <SignupForm />
        </a>
      </div>
    </section>
  );
}
