
import Header from "../components/header";
import Layout from "../components/layout";
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Header/>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
