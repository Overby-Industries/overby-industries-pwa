import SubNavbar from "../components/SubNavbar";

export default function AerospaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubNavbar
        title="Aerospace"
        links={[
          { label: "Propulsion", href: "/aerospace/propulsion" },
          { label: "Operating Systems", href: "/aerospace/operating-systems" },
          { label: "Flight Controls", href: "/aerospace/flight-controls" },
          { label: "Airframe", href: "/aerospace/airframe" },
        ]}
      />
      {children}
    </>
  );
}
