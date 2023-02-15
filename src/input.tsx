import clsx from "clsx";

export default function Input({
  placeholder,
  type = "text",
  children,
  required,
  className,
  ...rest
}: any) {
  const classes = clsx(
    {
      input: true,
    },
    className
  );
  return (
    <label className="label">
      {placeholder}
      {required && <span className="input-required">*</span>}
      <div>
        <input
          className={classes}
          {...rest}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </label>
  );
}
