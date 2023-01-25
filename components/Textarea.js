import styles from "@/styles/components/textarea.module.scss";
import MarkdownBlock from "@/partials/MarkdownBlock";
import Waves from "@/partials/Waves";

const Textarea = ({ textarea }) => {
  return (
    <>
      <Waves currentColor={textarea.backgroundColor}  />
      <div className={`${styles.content} bg-${textarea.backgroundColor}`}>
        {textarea.body ? <MarkdownBlock markdown={textarea.body} /> : null}
      </div>
    </>
  );
};

export default Textarea;
