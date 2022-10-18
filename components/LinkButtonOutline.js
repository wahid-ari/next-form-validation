import Link from "next/link";

export default function LinkButtonOutline({ className, href, pills, children, ...rest }) {
  return (
    <Link href={href}>
      <a
        {...rest}
        className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-600`}
      >
        {children}
      </a>
    </Link>
  );
}

LinkButtonOutline.green = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link href={href}>
      <a
        {...rest}
        className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium text-emerald-500 hover:text-white border border-emerald-500 hover:bg-emerald-600`}
      >
        {children}
      </a>
    </Link>
  );
}

LinkButtonOutline.yellow = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link href={href}>
      <a
        {...rest}
        className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium text-amber-500 hover:text-white border border-amber-500 hover:bg-amber-600`}
      >
        {children}
      </a>
    </Link>
  );
}

LinkButtonOutline.orange = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link href={href}>
      <a
        {...rest}
        className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium text-orange-500 hover:text-white border border-orange-500 hover:bg-orange-600`}
      >
        {children}
      </a>
    </Link>
  );
}

LinkButtonOutline.red = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link href={href}>
      <a
        {...rest}
        className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium text-red-500 hover:text-white border border-red-500 hover:bg-red-600`}
      >
        {children}
      </a>
    </Link>
  );
}

LinkButtonOutline.purple = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link href={href}>
      <a
        {...rest}
        className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium text-violet-500 hover:text-white border border-violet-500 hover:bg-violet-600`}
      >
        {children}
      </a>
    </Link>
  );
}

LinkButtonOutline.dark = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link href={href}>
      <a
        {...rest}
        className={`
				${className ? className + " " : ""}
				${pills ? "rounded-full" : "rounded"}
				text-sm transition-all px-3 py-1.5 font-medium text-gray-500 hover:text-white border border-gray-500 hover:bg-gray-600 dark:text-gray-300`}
      >
        {children}
      </a>
    </Link>
  );
}