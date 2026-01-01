import SubNavbar from "../components/SubNavbar";

export default function HeavyIndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubNavbar
        title="Heavy Industries"
        links={[
          { label: "Asteroid Mining", href: "/heavy-industries/asteroid-mining" },
          { label: "Space Debris Reclamation", href: "/heavy-industries/space-debris-reclamation" },
          { label: "Advanced Manufacturing", href: "/heavy-industries/advanced-manufacturing" },
          { label: "Robotics", href: "/heavy-industries/robotics" },
        ]}
      />
      {children}
    </>
  );
}