export default function Wrapper({ children, className }) {
  return (
    <main className={` max-w-screen-xl mx-auto px-4  ${className}`}>
      {children}
    </main>
  );
}
