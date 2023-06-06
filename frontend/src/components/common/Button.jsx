const Button = ({ text, onClick, className,disabled }) => {
  return (
    <button
      className={`inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-4 text-center py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 w-auto ${className}`}
      onClick={onClick}
      type="submit"
      disable={disabled}
    > 
      {disabled ? 'Signing up...' : text}
    </button>
  );
};

export default Button;
