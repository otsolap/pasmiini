import React from "react";
import Link from "next/link";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";
import styles from "@/styles/components/heroCarousel.module.scss";
import Waves from "@/partials/Waves";

const HeroCarousel = ({ heroCarousel }) => {
  return (
    <>
      <Waves currentColor={heroCarousel.backgroundColor} />
      <section
        className={`${styles.carousel} bg-${heroCarousel.backgroundColor}`}
      >
        {heroCarousel && (
          <Swiper
            className={`heroCarousel ${styles.wrapper}`}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 7500,
              disableOnInteraction: true,
            }}
            centeredSlides={true}
            rewind={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            {heroCarousel.items.map((item, i) => {
              return (
                <SwiperSlide className={styles.item} key={i}>
                  <figure className={styles.imageContainer}>
                    <Image
                      className={styles.image}
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="100vw"
                    />
                  </figure>
                  <div className={`${styles.body} bg-${item.backgroundColor} `}>
                    {item.title && <h3>{item.title}</h3>}
                    {item.summary && <p>{item.summary}</p>}
                    {item.buttons && (
                      <footer className={styles.buttonWrapper}>
                        {item.buttons.map((btn, i) => (
                          <Link key={i} href={btn.url} className={`btn`}>
                            {btn.title}
                          </Link>
                        ))}
                      </footer>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </section>
      <Waves  rotated  currentColor={heroCarousel.backgroundColor} />
    </>
  );
};

export default HeroCarousel;
