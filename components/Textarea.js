import styles from "@/styles/components/textarea.module.scss";
import MarkdownBlock from "@/partials/MarkdownBlock";

const Textarea = ({ textarea }) => {
  return (
    <div className={` bg-${textarea.backgroundColor}`}>
      <section className={styles.content}>
        {textarea.body ? <MarkdownBlock markdown={textarea.body} /> : null}
      </section>
    </div>
  );
};

export default Textarea;
