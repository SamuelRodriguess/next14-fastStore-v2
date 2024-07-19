import { Button as UIButton } from "@faststore/ui";
import styles from "./CustomBuyButtons.module.scss";

const CustomBuyButton = () => {
  return (
    <UIButton
      variant="primary"
      onClick={() => {
        alert("alert click");
      }}
      className={styles.CustomBuyButton}
    >
      CUSTOM NEW BUTTON
    </UIButton>
  );
};

export default CustomBuyButton;
