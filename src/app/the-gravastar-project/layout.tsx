import type { ComponentType } from "react";
import NavBar from "@/app/components/NavBar";

type NavBarProps = {
  title: string;
  links: { href: string; label: string }[];
};

const TypedNavBar = NavBar as ComponentType<NavBarProps>;

export default function GravastarProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TypedNavBar
        title="The Gravastar Project"
        links={[
        ]}     
      />
      {children}
    </>
  );
}