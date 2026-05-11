import type { ComponentType } from "react";
import NavBar from "@/app/components/NavBar";

type NavBarProps = {
  title: string;
  links: { href: string; label: string }[];
};

const TypedNavBar = NavBar as ComponentType<NavBarProps>;

export default function ISRULayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TypedNavBar
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