import React, { useRef, useEffect } from "react";
import "./header.css";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add(`sticky__header`);
      } else {
        headerRef.current.classList.remove(`sticky__header`);
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <Link to="/">
              <div className="logo">
                <img src={logo} alt="logo" />

                <div>
                  <h1>E-Market</h1>
                </div>
              </div>
            </Link>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <motion.span whileHover={{ scale: 1.2 }} className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </motion.span>

              <motion.span whileHover={{ scale: 1.2 }} className="cart__icon">
                <Link to="/cart">
                  <i class="ri-shopping-bag-line"></i>
                  <span className="badge">{totalQuantity}</span>
                </Link>
              </motion.span>

              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>

              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
