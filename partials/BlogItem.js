import { useRouter } from "next/router";
import styles from "@/styles/components/blog.module.scss";
import Link from "next/link";
import Image from "next/image";
import site from "@/content/settings/site.json";

const BlogItem = ({ image, title, slug }) => {
  const router = useRouter();
  const BLOG_PATH = "blogi/";
  let path;
  if (router.pathname == "/") {
    path = router.asPath + BLOG_PATH + slug;
  } else {
    path = router.asPath + '/' + slug;
  }

  return (
    <article className={styles.blog}>
      <Link passHref className={styles.imageContainer} href={path}>
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
          <Link href={path}>{title}</Link>
        </h3>
      )}
    </article>
  );
};

export default BlogItem;
