export default function Button({ title, icon, handleClick, className }) {
  return (
    <button
      className={`${className} py-1.5 px-4 text-sm  flex items-center gap-2  shadow-md bg-color_black text-color_white hover:bg-color_white hover:text-color_black border hover:border-color_black duration-150`}
      onClick={handleClick}
    >
      {icon} {title}
    </button>
  );
}
