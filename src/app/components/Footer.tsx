export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-400 bg-black/80">
      <p>
        © {new Date().getFullYear()} Overby Industries. All Rights Reserved.
      </p>
      <p className="mt-2">Ethical • Sustainable • Zero-Waste Space Economy</p>
    </footer>
  );
}
