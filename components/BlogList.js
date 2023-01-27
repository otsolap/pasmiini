import Link from "next/link";
import styles from "@/styles/components/blog.module.scss";
import BlogItem from "@/partials/BlogItem";
import Waves from "@/partials/Waves";

const BlogList = ({ blogs }) => {
  return (
    <>
      <Waves currentColor={blogs.backgroundColor} />
      <section className={`${styles.blogs} bg-${blogs.backgroundColor}`}>
        {blogs.title && (
          <header className={styles.header}>
            {blogs.title && <h2>{blogs.title}</h2>}
            {blogs.summary && <p>{blogs.summary}</p>}
          </header>
        )}
        {blogs.items && (
          <div className={`${styles.wrapper} ${styles.indexWrapper}`}>
            {blogs.items.map((item, i) => {
              return (
                <BlogItem
                  key={i}
                  image={item.image}
                  title={item.title}
                  slug={item.slug}
                />
              );
            })}
          </div>
        )}
        {blogs.link && (
          <footer className={styles.footer}>
            {blogs.link.map((anchor, i) => (
              <Link key={i} href={anchor.url}>
                {anchor.title}
              </Link>
            ))}
          </footer>
        )}
      </section>
      <Waves  rotated currentColor={blogs.backgroundColor} />
    </>
  );
};

export default BlogList;
