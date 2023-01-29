import Meta from "@/components/Meta";
import Textarea from "@/components/Textarea";

const Calender = ({ meta, textarea }) => {
  return (
    <>
      <Meta meta={meta} />
      <Textarea textarea={textarea} />
    </>
  );
};

export async function getStaticProps() {
  const calender = await import(`../../content/pages/calender.json`);

  return {
    props: {
      meta: {
        title: calender.meta.title,
        description: calender.meta.description,
        url: calender.meta.url,
        image: calender.meta.image,
      },
      textarea: {
        body: calender.textarea.body,
        backgroundColor: calender.textarea.backgroundColor,
      },
    },
  };
}

export default Calender;
