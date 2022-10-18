import Link from "next/link";
const linkClassName = "text-sky-500 hover:text-sky-600 transition-all text-sm font-medium block mb-1.5"

export default function ConsoleSidebar() {
  return (
    <div className="sm:w-1/5 px-4 mx-auto pt-5">
      <div className="sticky top-[4.5rem]  border-r dark:border-neutral-800">
        <h1 className="dark:text-white font-semibold mb-4">Example</h1>
        <p className="dark:text-white font-semibold text-sm mb-2">Pages</p>
        <Link href='/example'>
          <a className={linkClassName}>
            Yup
          </a>
        </Link>
        <Link href='/example/yup-object'>
          <a className={linkClassName}>
            Yup Object
          </a>
        </Link>
        <Link href='/example/zod'>
          <a className={linkClassName}>
            Zod
          </a>
        </Link>
        <Link href='/example/zod-object'>
          <a className={linkClassName}>
            Zod Object
          </a>
        </Link>
        <Link href='/example/rhf'>
          <a className={linkClassName}>
            React Hook Form
          </a>
        </Link>
        <Link href='/example/rhf-filled'>
          <a className={linkClassName}>
            React Hook Form Filled
          </a>
        </Link>
        <p className="dark:text-white font-semibold text-sm mt-4 mb-2">Validations</p>
        <Link href='/example/yup-validation'>
          <a className={linkClassName}>
            Yup
          </a>
        </Link>
        <Link href='/example/yup-object-validation'>
          <a className={linkClassName}>
            Yup Object
          </a>
        </Link>
        <Link href='/example/zod-validation'>
          <a className={linkClassName}>
            Zod
          </a>
        </Link>
        <Link href='/example/zod-object-validation'>
          <a className={linkClassName}>
            Zod Object
          </a>
        </Link>
      </div>
    </div>
  )
}