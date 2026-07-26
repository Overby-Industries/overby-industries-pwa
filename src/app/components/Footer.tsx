import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">Overby Industries</div>
      <div className="footer-copy">
        © {new Date().getFullYear()} Overby Industries. All Rights Reserved.
      </div>
      <div className="footer-social">
        <Link
          href="https://github.com/Overby-Industries"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </div>
      <div className="footer-tagline">
        Ethical · Sustainable · Zero-Waste Space Economy
      </div>
    </footer>
  );
}
