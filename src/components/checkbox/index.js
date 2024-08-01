const Checkbox = ({
  id,
  label,
  checked,
  onChange,
  className,
  labelClassName,
}) => {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer space-x-3">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={`${className} form-checkbox h-6 w-6 text-branded-blue border-gray-300 rounded`}
      />
      <span className={`${labelClassName} text-white font-bold text-md lg:text-lg`}>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
