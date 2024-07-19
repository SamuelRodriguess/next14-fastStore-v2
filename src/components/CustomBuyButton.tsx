import { Button as UIButton } from "@faststore/ui";

const CustomBuyButton = () => {
  return (
    <UIButton
      variant="primary"
      onClick={() => {
        alert("alert click");
      }}
    >
      CUSTOM NEW BUTTON
    </UIButton>
  );
};

export default CustomBuyButton;
