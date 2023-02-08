import React, { useEffect } from "react";
import useToggle from "@/hooks/useToggleState";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import nav from "@/content/settings/nav.json";
import site from "@/content/settings/site.json";
import home from "@/content/pages/home.json";
import styles from "@/styles/components/header.module.scss";

const Header = () => {
  const [transparentBackground, toggle] = useToggle(true);
  const router = useRouter();
  const { brand, navigation } = nav;
  const { calender } = site;
  const { mediaWidth, media } = home.hero;

  const toggleBackground = () => {
    if (mediaWidth !== true || media !== "image" || router.pathname !== "/") {
      return;
    }

    if (window.scrollY < 100) {
      return toggle(true);
    } else if (window.scrollY > 100) {
      return toggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleBackground);

    return () => window.removeEventListener("scroll", toggleBackground);
  }, []);

  const pages = navigation.pages.map((page, i) => {
    return (
      <li
        className={`${styles.linkWrapper}  ${
          router.asPath == page.path ? "active" : ""
        }`}
        key={i}
      >
        <Link className={styles.link} href={page.path}>
          {page.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <nav className={styles.header}>
        <header className={styles.topMenuWrapper}>
          <ul className={`container ${styles.topMenu}`}>
            {brand.logo && (
              <figure className={styles.logo}>
                <Link passHref className={styles.brandLink} href={"/"}>
                  <Image
                    src={brand.logo}
                    alt=""
                    quality={100}
                    height={50}
                    width={130}
                    sizes="33vw"
                  />
                </Link>
              </figure>
            )}
            <h3 className={`desktop-only ${styles.slogan}`}>{brand.slogan}</h3>
            {calender && (
              <Link
                className={`mobile-only ${styles.calender}`}
                href={calender.url}
              >
                {calender.title}
              </Link>
            )}
          </ul>
        </header>
      </nav>
      <nav
        className={`
      desktop-only 
      ${styles.primaryMenu}
      ${transparentBackground == true ? styles.transparent : styles.colorful}
      `}
      >
        <ul className={styles.wrapper}>
          {pages}
          {calender && (
            <Link className={`active ${styles.calender}`} href={calender.url}>
              {calender.title}
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
