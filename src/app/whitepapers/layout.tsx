import SubNavbar from "../components/GravNavbar";

export default function WhitepapersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubNavbar
        title="White Papers"
        links={[
        ]}     
      />
      {children}
    </>
  );
}