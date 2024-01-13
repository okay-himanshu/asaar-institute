export default function Wrapper({ children, className }) {
  return <main className={`px-4 sm:px-20  ${className}`}>{children}</main>;
}
