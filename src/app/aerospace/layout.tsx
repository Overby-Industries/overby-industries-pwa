import type { ComponentType } from "react";
import NavBar from "@/app/components/NavBar";

type NavBarProps = {
  title: string;
  links: { href: string; label: string }[];
};

const TypedNavBar = NavBar as ComponentType<NavBarProps>;

export default function AerospaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TypedNavBar
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
