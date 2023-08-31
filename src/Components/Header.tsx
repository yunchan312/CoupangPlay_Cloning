import styled from "styled-components";
import logoSrc from "../img.png";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Nav = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  color: white;
  font-size: 20px;
`;
const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  height: 80px;
`;

const Items = styled.ul`
  display: flex;
  gap: 15px;
`;

const Item = styled.li`
  list-style: none;
  text-decoration: none;
`;

const Search = styled.span`
  color: white;
  font-size: 30px;
  margin-right: 50px;
  :hover {
    cursor: pointer;
  }
`;

const navVariants = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,1)",
  },
};

export default function Header() {
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <Nav
      variants={navVariants}
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={navAnimation}
    >
      <Col>
        <Logo src={logoSrc} />
        <Items>
          <Link to="/">
            <Item>TV</Item>
          </Link>
          <Link to="/movie">
            <Item>영화</Item>
          </Link>
        </Items>
      </Col>
      <Col>
        <Link to="/search">
          <Search>
            <HiSearch />
          </Search>
        </Link>
      </Col>
    </Nav>
  );
}
