import styles from "./CustomNavbar.module.scss";
import "@faststore/ui/src/components/organisms/NavbarSlider/styles.scss";
import {
  NavbarLinks as UINavbarLinks,
  NavbarLinksList,
  NavbarLinksListItem,
  Button,
  Link,
} from "@faststore/ui";
import "@faststore/ui/src/components/molecules/NavbarLinks/styles.scss";

import NavbarSliderUsage from "../CustomNavigation/NavbarSlider";

const CustomNavbar = () => {
  const links = ["DAME", "HERRE", "BORN", "HOME", "BEAUTY"];

  return (
    <section>
      <UINavbarLinks className={styles.CustomNavBar}>
        <div data-fs-navbar-center>
          <Button variant="tertiary" size="small">
            Set location
          </Button>

          <NavbarSliderUsage />

          <NavbarLinksList>
            {links?.map((link) => (
              <NavbarLinksListItem key={link}>
                <Link variant="display" href="#">
                  {link}
                </Link>
              </NavbarLinksListItem>
            ))}
          </NavbarLinksList>
        </div>
      </UINavbarLinks>
    </section>
  );
};

export default CustomNavbar;
