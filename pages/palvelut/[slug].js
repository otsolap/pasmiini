import fs from "fs";
import Meta from "@/components/Meta";
import Hero from "@/components/Hero";
import MediaMix from "@/components/MediaMix";
import Highlight from "@/components/Highlight";
import Cards from "@/components/Cards";
import Accordion from "@/components/Accordion";
import Textarea from "@/components/Textarea";
import Waves from "@/partials/Waves";

const Service = ({
  meta,
  hero,
  mediaMix,
  mediaMix_2,
  mediaMix_3,
  mediaMix_4,
  mediaMix_5,
  textarea,
  cards,
  accordion,
  textarea_2,
  highlight,
}) => {
  return (
    <>
      <Meta meta={meta} />
      <section id="services">
        <Hero hero={hero} currentColor={textarea.backgroundColor} />
        <Textarea textarea={textarea} />
        <Cards cards={cards} />
        <Waves rotated currentColor={cards.backgroundColor} />
        <MediaMix mediaMix={mediaMix} currentColor={mediaMix.backgroundColor} />
        <Waves currentColor={mediaMix_2.backgroundColor} />
        <MediaMix
          mediaMix={mediaMix_2}
          currentColor={mediaMix_2.backgroundColor}
        />
        <Waves
          rotated
          currentColor={mediaMix_2.backgroundColor}
          siblingColor={mediaMix_3.backgroundColor}
        />
        <MediaMix
          mediaMix={mediaMix_3}
          currentColor={mediaMix_3.backgroundColor}
        />
        <Waves
          rotated
          currentColor={mediaMix_3.backgroundColor}
          siblingColor={mediaMix_4.backgroundColor}
        />
        <MediaMix
          mediaMix={mediaMix_4}
          currentColor={mediaMix_4.backgroundColor}
        />
        <Waves
          rotated
          currentColor={mediaMix_4.backgroundColor}
          siblingColor={mediaMix_5.backgroundColor}
        />
        <MediaMix
          mediaMix={mediaMix_5}
          currentColor={mediaMix_5.backgroundColor}
        />
        <Waves rotated currentColor={mediaMix_5.backgroundColor} />
        <Accordion accordion={accordion} />
        <Textarea textarea={textarea_2} />
        <Waves currentColor={highlight.backgroundColor} />
        <Highlight highlight={highlight} />
        <Waves
          rotated
          currentColor={highlight.backgroundColor}
          siblingColor={"green"}
        />
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const SERVICES_PATH = "./content/services/";

  let paths = await fs.promises.readdir(SERVICES_PATH);
  paths = paths.map((item) => {
    return { params: { slug: item.split(".")[0] } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let service = await fs.promises.readFile(
    `${process.env.SERVICE_DIR_PATH + slug}.json`,
    "utf-8"
  );

  let data = JSON.parse(service);

  // getting the accordion data
  let files = await fs.promises.readdir(process.env.ACCORDION_DIR_PATH);
  let file;
  let accordionData = [];

  for (let index = 0; index < files.length; index++) {
    const item = files[index];
    file = await fs.promises.readFile(
      process.env.ACCORDION_DIR_PATH + item,
      "utf-8"
    );
    accordionData.push(JSON.parse(file));
  }

  let selected = data["accordion"]["items"];
  let filtered = accordionData.filter((accordion) => {
    return selected.includes(accordion.id);
  });

  accordionData = filtered;

  return {
    props: {
      meta: {
        title: data["meta"]["title"],
        description: data["meta"]["description"],
        url: data["meta"]["url"],
        image: data["meta"]["image"],
      },
      hero: {
        title: data["hero"]["title"],
        summary: data["hero"]["summary"],
        align: data["hero"]["align"],
        media: data["hero"]["media"],
        image: data["hero"]["image"],
        mediaWidth: data["hero"]["mediaWidth"],
        video: data["hero"]["video"],
        buttons: data["hero"]["buttons"],
      },
      textarea: {
        body: data["textarea"]["body"],
        backgroundColor: data["textarea"]["backgroundColor"],
      },
      mediaMix: {
        backgroundColor: data["mediaMix"]["backgroundColor"],
        items: data["mediaMix"]["items"],
      },
      mediaMix_2: {
        backgroundColor: data["mediaMix_2"]["backgroundColor"],
        items: data["mediaMix_2"]["items"],
      },
      mediaMix_3: {
        backgroundColor: data["mediaMix_3"]["backgroundColor"],
        items: data["mediaMix_3"]["items"],
      },
      mediaMix_4: {
        backgroundColor: data["mediaMix_4"]["backgroundColor"],
        items: data["mediaMix_4"]["items"],
      },
      mediaMix_5: {
        backgroundColor: data["mediaMix_5"]["backgroundColor"],
        items: data["mediaMix_5"]["items"],
      },
      cards: {
        title: data["cards"]["title"],
        summary: data["cards"]["summary"],
        backgroundColor: data["cards"]["backgroundColor"],
        items: data["cards"]["items"],
      },
      accordion: {
        image: data["accordion"]["image"],
        backgroundColor: data["accordion"]["backgroundColor"],
        items: accordionData,
      },
      textarea_2: {
        body: data["textarea_2"]["body"],
        backgroundColor: data["textarea_2"]["backgroundColor"],
      },
      highlight: {
        image: data["highlight"]["image"],
        title: data["highlight"]["title"],
        body: data["highlight"]["body"],
        button: data["highlight"]["button"],
        backgroundColor: data["highlight"]["backgroundColor"],
      },
    },
  };
}

export default Service;
