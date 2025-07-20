import { Fragment } from "react/jsx-runtime";

import { ProductCard } from "@/components";
import { Button } from "@/components/ui";

import { useProducts } from "../api/queries";
import { Sidebar } from "../components/sidebar/Sidebar";
import styles from "./CatalogPage.module.css";

export const CatalogPage = () => {
  const { data, status, fetchNextPage } = useProducts();
  console.log(data);

  if (status === "pending") {
    return <div>Загружаю</div>;
  }

  if (status === "error") {
    return <div>Ошибка</div>;
  }

  return (
    <div className="container">
      <div className={styles.page}>
        <Sidebar />

        <div className={styles.catalog}>
          <div className={styles.catalogGrid}>
            {data &&
              data.map(({ products }, index) => (
                <Fragment key={index}>
                  {products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))}
                </Fragment>
              ))}
          </div>

          <div className={styles.buttonContainer}>
            <Button onClick={() => fetchNextPage()}>Показать еще</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
