import { useState } from "react";

import { Button } from "@/components/ui";

import styles from "./Gallery.module.css";

interface GalleryProps {
  images: string[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      <ul className={styles.controls}>
        {images.map((image, index) => (
          <li key={`slide-${index + 1}`}>
            <Button
              onClick={() => setCurrentIndex(index)}
              variant="ghost"
              className={`${styles.controller} ${currentIndex === index && styles.active}`}
            >
              <img src={image} alt={`photo-${index + 1}`} />
            </Button>
          </li>
        ))}
      </ul>

      <div className={styles.photoContainer}>
        <img src={images[currentIndex]} alt={images[currentIndex]} />
      </div>
    </div>
  );
};
