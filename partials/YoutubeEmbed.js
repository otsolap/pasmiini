import React from "react";
import { YouTubeGetID } from "@/utils/index";

const YoutubeEmbed = ({ src, className, autoplay }) => {
  return (
    <iframe
      className={`youtube ${className}`}
      playsInline
      controls="0"
      fs="0"
      rel="0"
      hl="fi"
      modestbranding="1"
      title="Pasmiini Video"
      allow="autoPlay"
      autoPlay={autoplay == true ? 1 : 0}
      muted
      src={`https://www.youtube.com/embed/${YouTubeGetID(src)}`}
    />
  );
};

export default YoutubeEmbed;
