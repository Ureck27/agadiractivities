
const Button = ({ children, onClick, fullWidth }) => (
  <button
    onClick={onClick}
    className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition ${
      fullWidth ? "w-full" : ""
    }`}
  >
    {children}
  </button>
);

export default Button ;