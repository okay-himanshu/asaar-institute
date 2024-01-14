export default function Wrapper({ children, className }) {
  return (
    <main
      className={`flex justify-center max-w-screen-2xl mx-auto px-4    ${className}`}
    >
      {children}
    </main>
  );
}
