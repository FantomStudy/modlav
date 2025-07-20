import { type ComponentProps, useState } from "react";

import { Button } from "..";
import styles from "./SizeSelector.module.css";

interface SizeSelectorProps extends ComponentProps<"div"> {
  values: string[];
}

export const SizeSelector = ({ values }: SizeSelectorProps) => {
  const [selected, setSelected] = useState(values[0]);

  return (
    <div className={styles.wrapper}>
      {values.map((value) => (
        <Button
          key={`size-${value}`}
          variant="outline"
          className={styles.selector}
          data-selected={selected === value || undefined}
          onClick={() => setSelected(value)}
        >
          {value}
        </Button>
      ))}
    </div>
  );
};
