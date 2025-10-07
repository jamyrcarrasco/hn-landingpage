import React from "react";

export const Image = ({ title, largeImage, smallImage, alt, description }) => {
  const altText = alt || title;

  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
            {description ? <p>{description}</p> : null}
          </div>
          <img
            src={smallImage}
            className="img-responsive"
            alt={altText}
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </div>
  );
};
