import { useEffect, useState } from "react";
import Prism from "prismjs";
import { ClipboardIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline"
// import "prismjs/themes/prism-okaidia.min.css";
// import "../styles/prism-themes/prism-one-dark.css"

export default function Code({ name= "Example Test :", code, className, lang = "javascript", testId, ...rest }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [copy, setCopy] = useState(false)

  async function copyText() {
    try {
      await navigator.clipboard.writeText(code);
      setCopy(true)
      setTimeout(() => {
        setCopy(false)
      }, 2500)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      {/* <style jsx>{`
        code[class*=language-], pre[class*=language-] {
					-moz-tab-size: 2;
					-o-tab-size: 2;
					tab-size: 2;
				}
				:not(pre)>code[class*=language-], pre[class*=language-] {
					background: #171717;
					border-radius: 0.375rem;
				}
      `}</style> */}
      <p className="font-semibold dark:text-white text-sm mt-4 mb-2">{name}</p>
      <div {...rest} className={`Code relative bg-neutral-800 text-sm rounded-md border border-neutral-700 ${className ? className : ""}`}>
        <button title="Copy Code" onClick={copyText} className="absolute right-0 m-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200 border dark:border-neutral-700 px-1 py-1 rounded-md transition-all">
          {copy ?
            <div className="flex items-center">
              <ClipboardIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-600 dark:text-gray-400 dark:hover:text-gray-300 transition-all" />
              <span className="pl-1 text-xs text-neutral-600 dark:text-gray-300">Copied !</span>
            </div>
            :
            <DocumentDuplicateIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-600 dark:text-gray-400 dark:hover:text-gray-300 transition-all" />
          }
        </button>
        <pre className="line-numbers scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-neutral-700">
          <code data-testid={testId} className={`language-${lang}`}>{code}</code>
        </pre>
      </div>
    </>
  );
}