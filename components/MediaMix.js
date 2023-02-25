import styles from "@/styles/components/mediaMix.module.scss";
import MediaMixItem from "@/partials/MediaMixItem";
import Waves from "partials/Waves";

const MediaMix = ({ mediaMix, currentColor }) => {
  return (
    <div className={`bg-${mediaMix.backgroundColor} `}>
      <div className={styles.mediaMix}>
        <Waves
          className={styles.wavesTop}
          rotated
          currentColor={currentColor}
        />
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
        <Waves className={styles.wavesBottom} currentColor={currentColor} />
      </div>
    </div>
  );
};

export default MediaMix;
