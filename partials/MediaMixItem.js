import styles from "@/styles/components/mediaMix.module.scss";
import Image from "next/image";
import Link from "next/link";
import MarkdownBlock from "@/partials/MarkdownBlock";
import YoutubeEmbed from "@/partials/YoutubeEmbed";

const MediaMixItem = ({ type, image, mediaWidth, video, body, buttons }) => {
  return (
    <div className={styles.mediaMixColumn}>
      {type == "video" && video && (
        <div className={styles.videoContainer}>
          <YoutubeEmbed src={video} />
        </div>
      )}
      {type == "image" && mediaWidth !== true && image && (
        <figure className={styles.circleContainer}>
          <Image
            className={styles.circle}
            src={image}
            alt=""
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw,
            50vw"
          />
        </figure>
      )}
      {type == "image" && mediaWidth == true && image && (
        <figure className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={image}
            alt=""
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw,
            50vw"
          />
        </figure>
      )}
      {type == "markdown" && body && (
        <div className={styles.markdown}>
          <MarkdownBlock markdown={body} />
        </div>
      )}
      {type == "markdown" && buttons && (
        <div className={styles.buttonWrapper}>
          {buttons.map((button, i) => (
            <Link key={i} href={button.url} className={`btn ${styles.button}`}>
              {button.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaMixItem;
