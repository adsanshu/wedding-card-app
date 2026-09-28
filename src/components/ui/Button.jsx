export default function Button({ children, onClick, className = "", variant = "primary" }) {
  const baseStyles = "px-5 py-2 rounded-full font-bold transition duration-200 text-xs md:text-sm";
  const variants = {
    primary: "bg-maroon text-gold border border-gold/40 hover:bg-maroon/90 shadow-md",
    secondary: "bg-cream text-maroon border border-maroon hover:bg-white",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

