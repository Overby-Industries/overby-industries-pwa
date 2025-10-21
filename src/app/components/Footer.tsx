export default function Footer() {
  return (
    <footer className="bg-black/80 py-8 text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} Overby Industries. All Rights Reserved.
      </p>
      <p className="mt-2">Ethical • Sustainable • Zero-Waste Space Economy</p>
    </footer>
  );
}
