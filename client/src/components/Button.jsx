export default function Button({ title, icon, handleClick, className }) {
  return (
    <button
      className={`${className}  flex items-center justify-center gap-1  shadow-md bg-color_black text-color_white hover:bg-color_white hover:text-color_black border hover:border-color_black duration-150`}
      onClick={handleClick}
    >
      {icon}
      {title}
    </button>
  );
}
