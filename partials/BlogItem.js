import styles from "@/styles/components/blog.module.scss";
import Link from "next/link";
import Image from "next/image";
import site from "@/content/settings/site.json";

const BlogItem = ({ image, title, slug }) => {
  return (
    <article className={styles.blog}>
      <Link className={styles.imageContainer} href={`/blogi/${slug}`}>
        {image ? (
          <Image
            className={styles.image}
            src={image}
            alt=""
            fill
            quality={100}
            sizes="(max-width: 1024x) 100vw,
            33vw"
          />
        ) : (
          <Image
            className={styles.image}
            src={site.placeholder.image}
            alt={site.placeholder.title}
            fill
            quality={100}
            sizes="(max-width: 1024x) 100vw,
            33vw"
          />
        )}
      </Link>
      {title && (
        <h3 className={styles.title}>
          <Link href={`/blogi/${slug}`}>{title}</Link>
        </h3>
      )}
    </article>
  );
};

export default BlogItem;
