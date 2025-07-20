import styles from "./ColorBadge.module.css";

interface ColorBadgeProps {
  color?: string;
  descriptor: string;
}

export const ColorBadge = ({
  color = "white",
  descriptor,
}: ColorBadgeProps) => {
  const normalizedColor = color.trim().toLowerCase();
  const isWhite = ["#fff", "#ffffff", "white"].includes(normalizedColor);

  return (
    <div className={styles.badge}>
      <div
        className={styles.color}
        style={{
          backgroundColor: color,
        }}
        data-is-white={isWhite || undefined}
      />
      <p className={styles.descriptor}>{descriptor}</p>
    </div>
  );
};
