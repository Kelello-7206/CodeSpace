import Head from "next/head";
import Notification from "../../Section10/components/ui/notification";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>MeetUp Events</title>
        <meta name="description" content="Events"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <Notification />
    </Layout>
  );
}

export default MyApp;
