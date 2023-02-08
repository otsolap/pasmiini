import styles from "@/styles/components/mediaMix.module.scss";
import MediaMixItem from "@/partials/MediaMixItem";
import Waves from "partials/Waves";

const MediaMix = ({ mediaMix, currentColor }) => {
  return (
    <div className={`bg-${mediaMix.backgroundColor} `}>
      <section className={styles.mediaMix}>
        <Waves currentColor={currentColor} className={styles.wavesTop} />
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
        <Waves
          rotated
          currentColor={currentColor}
          className={styles.wavesBottom}
        />
      </section>
    </div>
  );
};

export default MediaMix;
