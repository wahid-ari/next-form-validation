export default function Text({ className, children, ...rest }) {
  return (
    <p
      {...rest}
      className={`${className ? className + " " : ""} text-sm dark:text-white`}
    >
      {children}
    </p>
  );
}

Text.light = ({ className, children, ...rest }) => {
  return (
    <p
      {...rest}
      className={`${className ? className + " " : ""} font-light text-sm dark:text-white`}
    >
      {children}
    </p>
  );
};

Text.medium = ({ className, children, ...rest }) => {
  return (
    <p
      {...rest}
      className={`${className ? className + " " : ""} font-medium text-sm dark:text-white`}
    >
      {children}
    </p>
  );
};

Text.semibold = ({ className, children, ...rest }) => {
  return (
    <p
      {...rest}
      className={`${className ? className + " " : ""} font-semibold text-sm dark:text-white`}
    >
      {children}
    </p>
  );
};

Text.bold = ({ className, children, ...rest }) => {
  return (
    <p
      {...rest}
      className={`${className ? className + " " : ""} font-bold text-sm dark:text-white`}
    >
      {children}
    </p>
  );
};

Text.extrabold = ({ className, children, ...rest }) => {
  return (
    <p
      {...rest}
      className={`${className ? className + " " : ""} font-extrabold text-sm dark:text-white`}
    >
      {children}
    </p>
  );
};
