import clsx from "clsx";

export default function Button({ outline, className, children, ...rest }: any) {
  const classes = clsx(
    {
      btn: true,
      "btn- outline": outline,
      "btn-default": !outline,
    },
    className
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
