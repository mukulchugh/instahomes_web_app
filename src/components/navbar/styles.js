import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarFrame = styled.nav`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0.8rem var(--main-padding-x);
  margin-top: 1rem;
  z-index: 100;
  gap: 2em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .logo {
      width: clamp(12em, 30vw, 15em);
      height: 100%;
    }
  }
`;

export const MenuItems = styled.div`
  display: flex;
  gap: 2.5em;
  align-items: center;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 0;
  }
`;

export const NavbarSpan = styled(Link)`
  text-decoration: none;

  color: ${({ theme, dark }) =>
    dark ? theme.colors.softWhite : theme.colors.darkBlue};
  font-size: 16px;
  font-weight: 500;

  &.bm-item {
    display: inline-block;
    color: ${({ theme }) => theme.colors.darkBlue};
    padding: 1em 0;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .btn-menu {
      font-size: 14px !important;
    }
  }
`;

export const WishlistNumber = styled.span`
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.mainBg};
  padding: 0 5px;
  font-size: 16px;
`;

export const menuStyles = (theme, dark) => ({
  bmBurgerButton: {
    position: "sticky",
    width: "1.4em",
    height: "1.0em",
  },
  bmBurgerBars: {
    background: dark ? theme.colors.softWhite : theme.colors.mutedBlue,
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    top: 0,
    height: "100%",
  },
  bmMenu: {
    background: "#fafafa",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    display: "flex",
    flexDirection: "column",
    padding: "0.8em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: 0,
    left: 0,
  },
});
