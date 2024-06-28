/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Button, Box } from "theme-ui";
import { useState } from "react";
import Sticky from "react-stickynode";
import { DrawerProvider } from "contexts/drawer/drawer-provider";
import NavbarDrawer from "./navbar-drawer";
import Logo from "components/logo";
import { Link as NavLink } from "components/link";
import menuItems, { menuItemsTwo } from "./header.data";
import earth from "assets/images/earth.png";
import search from "assets/images/search.png";
import Image from "components/image";

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };

  return (
    <DrawerProvider>
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <header
          sx={styles.header}
          className={state.isSticky ? "is-sticky" : ""}
        >
          <Container sx={styles.container}>
            <Logo light isSticky={state.isSticky} />
            <nav as="nav" sx={styles.navbar}>
              {menuItems.map(({ path, label }, i) => (
                <NavLink
                  key={i}
                  path={path}
                  label={label}
                  className={state.isSticky ? "is-sticky" : ""}
                />
              ))}
            </nav>
            <nav as="nav" sx={styles.navbar}>
              {menuItemsTwo.map(({ path, label }, i) => (
                <NavLink
                  key={i}
                  path={path}
                  label={label}
                  className={state.isSticky ? "is-sticky" : ""}
                />
              ))}
              {/* <Box sx={{ marginLeft: "10px" }}> */}
              <Image src={search} alt="search" sx={{ margin: "0 10px" }} />
              <Image src={earth} alt="language" sx={{ marginRight: "5px" }} />
              <NavLink
                path={"#"}
                label={"Global"}
                className={state.isSticky ? "is-sticky" : ""}
              />
              {/* </Box> */}
            </nav>

            <NavbarDrawer isSticky={state.isSticky} />
          </Container>
        </header>
      </Sticky>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    position: "fixed",
    left: 0,
    right: 0,
    py: [3],
    transition: "all 0.3s ease-in-out 0s",
    "&.is-sticky": {
      background: "rgba( 255, 255, 255, 0.35 )",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 8px )",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbar: {
    display: ["none", null, null, null, "flex"],
    alignItems: "center",
    a: {
      color: "#0D0D0D",
      cursor: "pointer",
      display: ["flex"],
      fontWeight: "bold",
      fontSize: "15px",
      padding: 0,
      transition: "all 0.3s ease-in-out 0s",
      "+ a": {
        ml: [null, null, null, null, 4, 4],
      },
    },
    ".is-sticky": {
      color: "text",
    },
    ".active": {
      color: "primary",
    },
  },
  button: {
    display: ["none", null, null, null, "inline-flex"],
    minHeight: 45,
    px: "18px",
  },
  joinUs: {
    "@media screen and (max-width: 1024px)": {
      display: "none ",
    },
  },
};
