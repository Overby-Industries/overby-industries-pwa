import NavBar from "@/app/components/NavBar";
import type { ComponentType } from "react";

type NavBarProps = {
  title: string;
  links: { href: string; label: string }[];
};

const TypedNavBar = NavBar as ComponentType<NavBarProps>;

export default function HeavyIndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TypedNavBar
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