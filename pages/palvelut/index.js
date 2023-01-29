import React, { useState } from "react";
import fs from "fs";
import Meta from "@/components/Meta";
import Hero from "@/components/Hero";
import BlogItem from "@/partials/BlogItem";
import Highlight from "@/components/Highlight";
import Pagination from "@/components/navigation/Pagination";
import { paginate } from "@/utils/index";
import Waves from "@/partials/Waves";
import styles from "@/styles/pages/archive.module.scss";

const Services = ({ meta, hero, archive, items, highlight }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(items, currentPage, pageSize);

  return (
    <>
      <Meta meta={meta} />
      <section id="services-archive">
        <Hero hero={hero} />
        <Waves currentColor={archive.backgroundColor} />
        <div className={styles.items}>
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
        <Waves currentColor={highlight.backgroundColor} />
        <Highlight highlight={highlight} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  const services = await import(`../../content/pages/servicesArchive.json`);
  const site = await import(`../../content/settings/site.json`);
  /* Getting the Services data */
  let files = await fs.promises.readdir(process.env.SERVICE_DIR_PATH);
  let file;
  let data = [];
  for (let index = 0; index < files.length; index++) {
    const item = files[index];
    file = await fs.promises.readFile(
      process.env.SERVICE_DIR_PATH + item,
      "utf-8"
    );
    data.push(JSON.parse(file));
  }

  return {
    props: {
      meta: {
        title: services.meta.title,
        description: services.meta.description,
        url: services.meta.url,
        image: services.meta.image,
      },
      hero: {
        title: services.hero.title,
        summary: services.hero.summary,
        align: services.hero.align,
        media: services.hero.media,
        image: services.hero.image,
        mediaWidth: services.hero.mediaWidth,
        video: services.hero.video,
        buttons: services.hero.buttons,
      },
      archive: {
        title: services.archive.title,
        summary: services.archive.summary,
        backgroundColor: services.archive.backgroundColor,
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

export default Services;
