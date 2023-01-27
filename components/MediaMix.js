import styles from "@/styles/components/mediaMix.module.scss";
import MediaMixItem from "@/partials/MediaMixItem";
import Waves from "@/partials/Waves";

const MediaMix = ({ mediaMix }) => {
  return (
    <>
      <Waves currentColor={mediaMix.backgroundColor} />
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
      <Waves rotated currentColor={mediaMix.backgroundColor} />
    </>
  );
};

export default MediaMix;
