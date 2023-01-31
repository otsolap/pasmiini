import Meta from "@/components/Meta";
import Textarea from "@/components/Textarea";
import Highlight from "@/components/Highlight";
import Waves from "@/partials/Waves";

const Training = ({ meta, textarea, highlight }) => {
  return (
    <>
      <Meta meta={meta} />
      <Textarea textarea={textarea} />
      <Waves currentColor={highlight.backgroundColor} />
      <Highlight highlight={highlight} />
      <Waves
          rotated
          currentColor={highlight.backgroundColor}
          siblingColor={"green"}
        />
    </>
  );
};

export async function getStaticProps() {
  const treenit = await import(`../../content/pages/treenit.json`);
  const site = await import(`../../content/settings/site.json`);

  return {
    props: {
      meta: {
        title: treenit.meta.title,
        description: treenit.meta.description,
        url: treenit.meta.url,
        image: treenit.meta.image,
      },
      textarea: {
        body: treenit.textarea.body,
        backgroundColor: treenit.textarea.backgroundColor,
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

export default Training;
