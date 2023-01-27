import React, { useState } from "react";
import fs from "fs";
import Meta from "@/components/Meta";
import Hero from "@/components/Hero";
import BlogItem from "@/partials/BlogItem";
import Highlight from "@/components/Highlight";
import Pagination from "@/components/navigation/Pagination";
import { paginate } from "@/utils/index";
import Waves from "@/partials/Waves";
import styles from "@/styles/components/blog.module.scss";

const Blog = ({ meta, hero, archive, items, highlight }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(items, currentPage, pageSize);

  return (
    <>
      <Meta meta={meta} />
      <section id="blog-archive">
        <Hero hero={hero} />
        <div className={styles.blogs}>
          <Waves currentColor={archive.backgroundColor} />
          {archive.title && (
            <header className={styles.header}>
              {archive.title && <h2>{archive.title}</h2>}
              {archive.summary && <p>{archive.summary}</p>}
            </header>
          )}
          <div className={styles.wrapper}>
            {paginatedPosts.map((item, i) => {
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
          <Pagination
            items={items.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
        <Highlight highlight={highlight} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  const blog = await import(`../../content/pages/blogArchive.json`);
  const site = await import(`../../content/settings/site.json`);
  /* Getting the Blog data */
  let files = await fs.promises.readdir(process.env.BLOG_DIR_PATH);
  let file;
  let data = [];
  for (let index = 0; index < files.length; index++) {
    const item = files[index];
    file = await fs.promises.readFile(
      process.env.BLOG_DIR_PATH + item,
      "utf-8"
    );
    data.push(JSON.parse(file));
  }

  return {
    props: {
      meta: {
        title: blog.meta.title,
        description: blog.meta.description,
        url: blog.meta.url,
        image: blog.meta.image,
      },
      hero: {
        title: blog.hero.title,
        summary: blog.hero.summary,
        align: blog.hero.align,
        media: blog.hero.media,
        image: blog.hero.image,
        mediaWidth: blog.hero.mediaWidth,
        video: blog.hero.video,
        buttons: blog.hero.buttons,
      },
      archive: {
        title: blog.archive.title,
        summary: blog.archive.summary,
        backgroundColor: blog.archive.backgroundColor,
      },
      items: data,
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

export default Blog;
