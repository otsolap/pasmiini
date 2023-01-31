import styles from "@/styles/components/mediaMix.module.scss";
import MediaMixItem from "@/partials/MediaMixItem";

const MediaMix = ({ mediaMix }) => {
  return (
    <div className={`bg-${mediaMix.backgroundColor} `}>
      <section className={styles.mediaMix}>
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
    </div>
  );
};

export default MediaMix;
