import styles from "@/styles/components/mediaMix.module.scss";
import MediaMixItem from "@/partials/MediaMixItem";

const MediaMix = ({ mediaMix }) => {
  return (
      <section className={`${styles.mediaMix} bg-${mediaMix.backgroundColor} `}>
        <div className={styles.wrapper}>
          {mediaMix.items.map((item, i) => {
            return (
              <MediaMixItem
                key={i}
                type={item.type}
                image={item.image}
                mediaWidth={item.mediaWidth}
                video={item.video}
                body={item.body}
                buttons={item.buttons}
              />
            );
          })}
        </div>
      </section>
  );
};

export default MediaMix;
