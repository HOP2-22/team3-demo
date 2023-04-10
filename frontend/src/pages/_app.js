import "@/styles/globals.css";
import "@/styles/artist.css";
import { Provider } from "../context/context";
import Layout from "../layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )}