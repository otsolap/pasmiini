import React from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, EffectCoverflow } from "swiper";
import styles from "@/styles/components/serviceCarousel.module.scss";
import Waves from "@/partials/Waves";
import YoutubeEmbed from "@/partials/YoutubeEmbed";

const ServiceCarousel = ({ content }) => {
  return (
    <>
      <Waves currentColor={content.backgroundColor} />
      <section
        className={`
      bg-${content.backgroundColor}`}
      >
        {content.title && (
          <header className={styles.header}>
            {content.title && <h2>{content.title}</h2>}
            {content.summary && <p>{content.summary}</p>}
          </header>
        )}
        {content && (
          <Swiper
            className={`serviceCarousel ${styles.wrapper}`}
            effect={"coverflow"}
            spaceBetween={64}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                spaceBetween: 96,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 175,
              scale: 1,
              modifier: 2.5,
              slideShadows: false,
            }}
            centeredSlides={true}
            autoplay={{
              delay: 7500,
              disableOnInteraction: true,
            }}
            rewind={true}
            pagination={{
              clickable: true,
              renderBullet: function () {
                return `<span class="swiper-pagination-bullet ${
                  content.model === "services" ? "green-circle" : null
                }"></span>`;
              },
            }}
            modules={[Autoplay, Pagination, EffectCoverflow]}
          >
            {content.items.map((item, i) => {
              return (
                <SwiperSlide className={` ${styles.item}`} key={i}>
                  {item.type == "image" && item.image && (
                    <figure className="serviceCarousel__figure">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024x) 100vw, 33vw"
                      />
                    </figure>
                  )}
                  {item.type == "video" && item.video && (
                    <div className="serviceCarousel__figure">
                      <YoutubeEmbed src={item.video} />
                    </div>
                  )}
                  {item.title && (
                    <h3
                      className={`${
                        content.model === "references" ? styles.title : null
                      } serviceCarousel__title`}
                    >
                      {item.title}
                    </h3>
                  )}
                  <div
                    className={`serviceCarousel__body refeenceCarousel__body`}
                  >
                    {item.summary && <p>{item.summary}</p>}
                  </div>
                  {item.button && (
                    <footer className="serviceCarousel__footer">
                      {item.button.map((btn, i) => (
                        <Link key={i} href={btn.url} className={`btn`}>
                          {btn.title}
                        </Link>
                      ))}
                    </footer>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </section>
      <Waves  rotated currentColor={content.backgroundColor} />
    </>
  );
};

export default ServiceCarousel;
