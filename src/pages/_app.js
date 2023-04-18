import Layout from "@/components/layout";
import "@/styles/globals.css";
import 'regenerator-runtime/runtime'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
