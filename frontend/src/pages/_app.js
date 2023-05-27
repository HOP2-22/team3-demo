import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

import { UserProvider } from "@/context/UserContext";
import Layout from "@/components/layout/Layout";

const App = ({ Component, pageProps }) => {
  return (

    <UserProvider>
      <Layout>
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </Layout>
    </UserProvider>

  );
};

export default App;
