import styles from "@/styles/components/textarea.module.scss";
import MarkdownBlock from "@/partials/MarkdownBlock";

const Textarea = ({ textarea }) => {
  return (
    <div className={`${styles.content} bg-${textarea.backgroundColor}`}>
      {textarea.body ? <MarkdownBlock markdown={textarea.body} /> : null}
    </div>
  );
};

export default Textarea;
