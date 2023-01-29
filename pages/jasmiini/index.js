import Meta from "@/components/Meta";
import MediaMix from "@/components/MediaMix";
import Textarea from "@/components/Textarea";
import Cards from "@/components/Cards";
import ImageCarousel from "@/components/ImageCarousel";
import Highlight from "@/components/Highlight";
import Waves from "@/partials/Waves";

const About = ({
  meta,
  mediaMix,
  textarea,
  cards,
  imageCarousel,
  highlight,
}) => {
  return (
    <>
      <Meta meta={meta} />
      <MediaMix mediaMix={mediaMix} />
      <Waves rotated currentColor={mediaMix.backgroundColor} />
      <Textarea textarea={textarea} />
      <Waves currentColor={cards.backgroundColor} />
      <Cards cards={cards} />
      <Waves rotated currentColor={cards.backgroundColor} />
      <ImageCarousel imageCarousel={imageCarousel} />
      <Waves currentColor={highlight.backgroundColor} />
      <Highlight highlight={highlight} />
    </>
  );
};

export async function getStaticProps() {
  const about = await import(`../../content/pages/about.json`);
  const site = await import(`../../content/settings/site.json`);
  const jasmiini = await import(
    `../../content/authors/jasmiini_peuramaki.json`
  );

  return {
    props: {
      meta: {
        title: about.meta.title,
        description: about.meta.description,
        url: about.meta.url,
        image: about.meta.image,
      },
      mediaMix: {
        backgroundColor: "creamyWhite",
        items: [
          {
            type: "image",
            image: jasmiini.image,
          },
          {
            type: "markdown",
            body: jasmiini.body,
            buttons: jasmiini.buttons,
          },
        ],
      },
      textarea: {
        body: about.textarea.body,
        backgroundColor: about.textarea.backgroundColor,
      },
      cards: {
        title: site.cards.title,
        summary: site.cards.summary,
        backgroundColor: site.cards.backgroundColor,
        items: site.cards.items,
      },
      imageCarousel: {
        title: site.imageCarousel.title,
        summary: site.imageCarousel.summary,
        backgroundColor: site.imageCarousel.backgroundColor,
        items: site.imageCarousel.items,
      },
      highlight: {
        image: site.highlight.image,
        title: site.highlight.title,
        body: site.highlight.body,
        button: site.highlight.button,
        backgroundColor: site.highlight.backgroundColor,
      },
    },
  };
}

export default About;
