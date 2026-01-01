import SubNavbar from "../components/SubNavbar";

export default function ISRULayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubNavbar
        title="ISRU"
        links={[
          { label: "Regolith", href: "/isru/regolith" },
          { label: "Precious-Based Metals", href: "/isru/precious-based-metals" },
          { label: "Hydrocarbons", href: "/isru/hydrocarbons" },
          { label: "Water", href: "/isru/water" },
        ]}
      />
      {children}
    </>
  );
}