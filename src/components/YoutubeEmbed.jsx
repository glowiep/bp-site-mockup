import React from "react";
import PropTypes from "prop-types";
import '../styles/YoutubeEmbed.scss'

const YoutubeEmbed = ({ embedId }) => {
  return (
    <section className="video-responsive video" id="#watch-our-video">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </section>
  )
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
