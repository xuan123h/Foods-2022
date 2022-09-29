import React, { useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";
import { useRef } from "react";
// Redux-toolkit
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import useAuth from "../custom-hook/useAuth";
import "tippy.js/dist/tippy.css"; // optional
import Tippy from "@tippyjs/react/headless"; // different import path!
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { currentUser } = useAuth();
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <h5> Tasty Treat </h5>
          </div>
          {/* ========== menu ========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {" "}
                  {item.display}{" "}
                </NavLink>
              ))}
            </div>
          </div>
          {/* ========= nav right icons ========== */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge"> {totalQuantity} </span>
            </span>
            <span className="user">
              {currentUser ? (
                <Tippy
                  render={(attrs) => (
                    <div tabIndex="-1" {...attrs} className="background__btn">
                      <span onClick={logout} className="cursor__btn">
                        {" "}
                        Logout{" "}
                      </span>
                      <p className="cursor__btn">
                        {" "}
                        <Link to="/register"> Signup</Link>{" "}
                      </p>
                      <p className="cursor__btn">
                        {" "}
                        <Link to="/register"> Login</Link>{" "}
                      </p>
                    </div>
                  )}
                  delay={300}
                  interactive={true}
                >
                  <motion.img
                    whileTap={{ scale: 1.2 }}
                    src={currentUser.photoURL}
                    alt="avatar"
                    className="avatar__btn"
                  />
                </Tippy>
              ) : (
                <Link to="/login">
                  <i class="ri-user-line"></i>
                </Link>
              )}
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
