import Head from "next/head";
import Carousel from "../components/Carousel";
import Video from "../components/Video";
import Gallery from "../components/Gallery";
import Valores from "../components/Valores";
import SimpleMap from "../components/SimpleMap";
import Banner from "../components/Banner";
import Valores2 from "../components/Valores2";
import Whatsapp from "../components/Whatsapp";
import Contact from "../components/Contact";
import Galeria from "../components/Galeria";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flavia Machado</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-1.png" />
      </Head>
      <Carousel />
      <Valores />
      <Gallery />
      <Valores2 />
      <Banner />
      <Video/>
      <SimpleMap />
      <Whatsapp />
    </div>
  );
}
