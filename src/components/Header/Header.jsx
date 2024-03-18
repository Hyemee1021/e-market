import React from "react";
import "./header.css";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
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
  return (
    <header className="header">
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
            <div className="navigation">
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
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>

              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>

              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
