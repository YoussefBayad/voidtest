/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Button, MenuButton } from "theme-ui";
import React, { useContext } from "react";
import { Link as NavLink } from "components/link";
import { DrawerContext } from "contexts/drawer/drawer-context";
import Drawer from "components/drawer";
import Logo from "components/logo";
import menuItems from "./header.data";
import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const NavbarDrawer = ({ isSticky }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  return (
    <Drawer
      width="340px"
      sx={styles.drawerWrapper}
      placement="right"
      drawerHandler={
        <Box sx={styles.handler}>
          <FiMenu color="black" size={"24px"} />
        </Box>
      }
      open={state?.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <button sx={styles.closeButton}>
          <AiOutlineClose fill="black" size="20px" />
        </button>
      }
      maskStyle={styles.mask}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Box sx={styles.wrapper}>
        <Logo sx={styles.logo} />
        <Box as="ul" sx={styles.navbar}>
          {menuItems?.map(({ label, path }, i) => (
            <li key={i}>
              <NavLink key={i} path={path} label={label} />
            </li>
          ))}
        </Box>
        <NavLink
          path={"join-us"}
          label={<Button variant="primary">Join Us</Button>}
          sx={styles.joinUs}
        />
      </Box>
    </Drawer>
  );
};
export default NavbarDrawer;

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",
    cursor: "pointer",
    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },

  drawer: {
    width: "100%",
    height: "100%",
    background: "rgba(228, 233, 250, 0.37)",
    borderRadius: "10px 0 0  10px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(9.1px)",
    border: "1px solid rgba(228, 233, 250, 0.61)",
    outline: 0,
  },
  mask: {
    opacity: 0.2,
    outline: "none",
  },
  close: {
    position: "absolute",
    top: 35,
    right: 30,
    zIndex: "1",
  },
  closeButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    display: "flex",
    p: 0,
    svg: {
      width: "25px",
      height: "25px",
      fill: "black",
    },
  },
  wrapper: {
    height: "100%",
    paddingTop: "21px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    ml: 6,
    mb: 5,
    mr: 12,
    img: {
      maxWidth: [160, null, null, "100%"],
    },
  },
  navbar: {
    listStyle: "none",
    m: 0,
    p: 0,
    "li > a": {
      backgroundColor: "#ffffff33",
      cursor: "pointer",
      // borderTop: (t) => `1px solid ${t.colors.borderColor}`,
      display: "flex",
      alignItems: "center",
      color: "heading",
      minHeight: 44,
      pl: 6,
      position: "relative",
      transition: "all 0.3s ease-in-out 0s",
    },
    "li:last-child > a": {
      // borderBottom: (t) => `1px solid ${t.colors.borderColor}`,
    },
    ".active": {
      color: "primary",
    },
  },
  joinUs: {
    fontSize: 1,
    minHeight: 45,
    margin: "auto 30px 40px",
    display: "block",
    button: {
      width: "100%",
    },
  },
};
