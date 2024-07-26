import React, { useState } from "react";
import {
  useUI,
  useFadeEffect,
  Icon,
  Button,
  IconButton,
  NavbarSlider as UINavbarSlider,
  NavbarSliderHeader as UINavbarSliderHeader,
  NavbarSliderContent as UINavbarSliderContent,
  NavbarSliderFooter as UINavbarSliderFooter,
} from "@faststore/ui";
import CustomNavbarLinks from "./NavbarLinks";

export const NavbarSlider = () => {
  const { closeNavbar } = useUI();
  const { fade, fadeOut } = useFadeEffect();

  return (
    <UINavbarSlider
      fade={fade}
      onDismiss={fadeOut}
      onTransitionEnd={() => fade === "out" && closeNavbar()}
    >
      <UINavbarSliderHeader onClose={fadeOut}>
        <IconButton
          onClick={fadeOut}
          aria-label="Logo"
          icon={<Icon name="Storefront" width={32} height={32} />}
        />
      </UINavbarSliderHeader>
      <UINavbarSliderContent>
        <CustomNavbarLinks />
      </UINavbarSliderContent>
      <UINavbarSliderFooter>
        <Button onClick={fadeOut}>Sign In</Button>
      </UINavbarSliderFooter>
    </UINavbarSlider>
  );
};

const NavbarSliderUsage = () => {
  const { openNavbar, navbar: displayNavbar } = useUI();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton
        aria-label=""
        icon={<Icon name="List" width={32} height={32} />}
        onClick={openNavbar}
      />
      {displayNavbar && <NavbarSlider />}
    </div>
  );
};

export default NavbarSliderUsage;
