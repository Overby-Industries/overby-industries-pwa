import SubNavbar from "../components/SubNavbar";

export default function HeavyIndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubNavbar
        title="Heavy Industry"
        links={[
          { label: "Asteroid Mining", href: "/heavy-industry/asteroid-mining" },
          { label: "Space Debris Reclamation", href: "/heavy-industry/space-debris-reclamation" },
          { label: "Advanced Manufacturing", href: "/heavy-industry/advanced-manufacturing" },
          { label: "Robotics", href: "/heavy-industry/robotics" },
        ]}
      />
      {children}
    </>
  );
}