import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import styles from "@/styles/components/imageCarousel.module.scss";

const ImageCarousel = ({ imageCarousel }) => {
  return (
    <section
      className={` 
          bg-${imageCarousel.backgroundColor}`}
    >
      {imageCarousel.title && (
        <header className={styles.header}>
          {imageCarousel.title && <h2>{imageCarousel.title}</h2>}
          {imageCarousel.summary && <p>{imageCarousel.summary}</p>}
        </header>
      )}
      {imageCarousel && (
        <Swiper
          className={`imageCarousel ${styles.wrapper}`}
          spaceBetween={0}
          slidesPerView={1.5}
          breakpoints={{
            390: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
          }}
          autoplay={{
            delay: 7500,
            disableOnInteraction: true,
          }}
          centeredSlides={true}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {imageCarousel.items.map((item, i) => {
            return (
              <SwiperSlide className={styles.item} key={i}>
                <figure className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024x) 100vw,
                    33vw"
                  />
                </figure>
                <footer className="imageCarousel__footer">
                  {item.title && <h3>{item.title}</h3>}
                  {item.summary && <p>{item.summary}</p>}
                </footer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default ImageCarousel;
