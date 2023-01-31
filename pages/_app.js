import "../styles/globals.scss";
import Layout from "@/components/Layout";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import MobileFooter from "@/components/navigation/MobileFooter";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <MobileFooter />
    </Layout>
  );
}

export default MyApp;
