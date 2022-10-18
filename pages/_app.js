import { GlobalProvider } from "@utils/GlobalContext";
import "@styles/globals.css";
import "@styles/prism-one-dark.css"

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp