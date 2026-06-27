import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { photos } from "./GalleryData";
import "./Gallery.css";

const GalleryPage = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="gallery-section">
      <div className="container">

        <div className="gallery-heading">
          <span className="gallery-subtitle">OUR GALLERY</span>

          <h1>Explore Our Hospital</h1>

          <p>
            Take a glimpse of our modern infrastructure, advanced medical
            facilities, patient care areas, emergency services and
            patient-friendly environment.
          </p>
        </div>

        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={250}
          spacing={18}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={photos.map((photo) => ({
            src: photo.src,
            title: photo.title,
          }))}
          plugins={[Zoom, Thumbnails]}
          zoom={{
            maxZoomPixelRatio: 4,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            scrollToZoom: true,
          }}
          thumbnails={{
            position: "bottom",
            width: 90,
            height: 60,
            border: 2,
            borderRadius: 10,
            padding: 4,
            gap: 12,
          }}
          carousel={{
            finite: false,
          }}
          animation={{
            fade: 300,
            swipe: 350,
          }}
          controller={{
            closeOnBackdropClick: true,
          }}
          render={{
            slideHeader: ({ slide }) =>
              slide.title ? (
                <div
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "600",
                    padding: "15px",
                  }}
                >
                  {slide.title}
                </div>
              ) : null,
          }}
        />

      </div>
    </section>
  );
};

export default GalleryPage;