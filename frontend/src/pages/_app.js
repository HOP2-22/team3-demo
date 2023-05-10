import "@/styles/globals.css";
import Layout from "../layout/layout";
import { Provider } from "@/context/context";
// import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        {/* <Toaster position="top-center" reverseOrder={false} /> */}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
