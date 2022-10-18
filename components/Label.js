export default function Label({ className, children, ...rest }) {
  return (
    <label
      {...rest}
      className={`${className} text-sm block text-gray-800 dark:text-neutral-100`}
    >
      {children}
    </label>
  );
}
