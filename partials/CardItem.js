import styles from "@/styles/components/cards.module.scss";
import Image from "next/image";

const MediaMixItem = ({ image, title, summary, className }) => {
  return (
    <article className={`${styles.card} ${className ? className : null}`}>
      {image && (
        <figure className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={image}
            alt=""
            fill
            quality={100}
            sizes="(max-width: 1024x) 100vw,
            33vw"
          />
        </figure>
      )}
      {title && <h3 className={styles.title}>{title}</h3>}
      {summary && <p>{summary}</p>}
    </article>
  );
};

export default MediaMixItem;
