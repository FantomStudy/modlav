import { Button, Input } from "@/components/ui";

import styles from "./MailingSection.module.css";

export const MailingSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            <strong>Подписывайся</strong> на рассылку и{" "}
            <strong>получи доступ</strong>
            <br /> к секретным <strong>распродажам</strong> и{" "}
            <strong>скидкам</strong> до 70%
          </h2>

          <form className={styles.form} action="#">
            <Input label="E-mail" placeholder="Введите e-mail" />

            <Input label="Имя" placeholder="Введите имя" />
            <Button>Подписаться</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
