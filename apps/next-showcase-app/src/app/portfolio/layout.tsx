export default function FeaturesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <h1>Portfolio</h1>
      {children}
    </>
  );
}