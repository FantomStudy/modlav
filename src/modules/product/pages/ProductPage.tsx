import { HeartIcon } from "@/assets/icons";
import { BreadCrumbs, Button, ColorBadge } from "@/components/ui";
import { SizeSelector } from "@/components/ui/size-selector/SizeSelector";

import { Gallery } from "../components/gallery/Gallery";
import { MailingSection } from "../components/mailing-section/MailingSection";
import { useRouteProduct } from "../hooks/useRouteProduct";
import styles from "./ProductPage.module.css";

const SIZES = ["43", "46", "49"];

export const ProductPage = () => {
  const product = useRouteProduct();

  return (
    <>
      <div className="container">
        <BreadCrumbs />
      </div>

      <section className={styles.product}>
        <div className="container">
          <div className={styles.productWrapper}>
            <Gallery images={product.images} />

            <div className={styles.card}>
              <div className={styles.cardHead}>
                <div>
                  <h1>{product.title}</h1>
                  <p className={styles.price}>{product.price} $</p>
                </div>

                <div className={styles.metric}>
                  <p>Размер: </p>
                  <SizeSelector values={SIZES} />
                </div>
                <div className={styles.metric}>
                  <p>Цвет:</p> <ColorBadge color="red" descriptor="Красный" />
                </div>

                <div className={styles.productButtons}>
                  <Button className={styles.addButton}>
                    Добавить в корзину
                  </Button>
                  <Button variant="outline" className={styles.likeButton}>
                    <HeartIcon />
                  </Button>
                </div>
              </div>

              <div className={styles.cardFoot}>
                <h3>Описание</h3>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MailingSection />
    </>
  );
};
