import styles from "@/styles/components/highlight.module.scss";
import Image from "next/image";
import Link from "next/link";
import MarkdownBlock from "@/partials/MarkdownBlock";

const Highlight = ({ highlight }) => {
  return (
    <div className={`bg-${highlight.backgroundColor}`}>
      <section className={styles.highlight}>
        {highlight.image && (
          <figue className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={highlight.image}
              alt=""
              width="115"
              height="115"
              quality={100}
              sizes="33vw"
            />
          </figue>
        )}
        <div className={styles.content}>
          {highlight.title && (
            <h2 className={styles.title}>{highlight.title}</h2>
          )}
          {highlight.body && <MarkdownBlock markdown={highlight.body} />}
        </div>
        {highlight.button && (
          <footer className={styles.buttonWrapper}>
            {highlight.button.map((btn, i) => (
              <Link key={i} href={btn.url} className={`btn btn--focus`}>
                {btn.title}
              </Link>
            ))}
          </footer>
        )}
      </section>
    </div>
  );
};

export default Highlight;
