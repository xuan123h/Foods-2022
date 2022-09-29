import React from "react";

import "../styles/cart-page.css";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

// useDispatch là xử lý những cái có hành động
// useSelector là khi ta trỏ đến những cái state mà người dùng đã lưu
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center"> Your cart is empty </h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center"> Image </th>
                      <th className="text-center"> Product Title </th>
                      <th className="text-center"> Price </th>
                      <th className="text-center"> Quantity </th>
                      <th className="text-center"> Delete </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-4">
                <h6>
                  {" "}
                  Subtotal: ${" "}
                  <span className="cart__subtotal"> {totalAmount} </span>
                </h6>
                <p> Taxes and shipping will calculate at checkout </p>
                <div className="cart__page-btn">
                  <button className="addToCart__btn me-4">
                    <Link to="/foods"> Continue Shopping</Link>{" "}
                  </button>
                  <button className="addToCart__btn">
                    <Link to="/checkout"> Proceed to checkout </Link>{" "}
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        {" "}
        <img src={image01} alt="" />{" "}
      </td>
      <td className="text-center justify-content-center"> {title} </td>
      <td className="text-center"> ${price} </td>
      <td className="text-center"> {quantity} </td>
      <td className="cart__item-del text-center" onClick={deleteItem}>
        {" "}
        <i class="ri-delete-bin-line"></i>{" "}
      </td>
    </tr>
  );
};

export default Cart;
