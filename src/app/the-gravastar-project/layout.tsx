import SubNavbar from "../components/GravNavbar";

export default function GravastarProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubNavbar
        title="The Gravastar Project"
        links={[
        ]}     
      />
      {children}
    </>
  );
}