import React from "react";
import "../styles/contact.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238216.96472890166!2d105.4423907559182!3d21.106981009601615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134581a62875e03%3A0xd905fd3662114cb4!2zUGjDumMgVGjhu40sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1664287276140!5m2!1svi!2s"
                title="Địa chỉ công ty bán đồ ăn"
                width="100%"
                height="400"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              >
                {" "}
              </iframe>
            </Col>
            <Col lg="4" md="6" xs="12">
              <h4> Thông tin liên hệ </h4>
              <p>
                {" "}
                Website thương mại điện tử ND Fresh do ND Group là đơn vị chủ
                quản, chịu trách nhiệm và thực hiện các giao dịch liên quan mua
                sắm sản phẩm hàng hoá tiêu dùng thiết yếu.
              </p>
              <p className="desc__color">
                <span> Địa chỉ: </span> Phúc Thọ, Hà Nội{" "}
              </p>
              <p className="desc__color">
                <span> Điện thoại: </span> 19006750{" "}
              </p>
              <p className="desc__color">
                <span> Email: </span> anhit2k3@gmail.com{" "}
              </p>
            </Col>
            <Col lg="4" md="6" xs="12">
              <div className="input__text">
                <label htmlFor=""> Họ và tên* </label>
                <input type="text" placeholder="Nhập họ và tên" />
              </div>
              <div className="input__text">
                <label htmlFor=""> Điện thoại* </label>
                <input type="number" placeholder="Nhập số điện thoại" />
              </div>
              <div className="input__text">
                <label htmlFor=""> Nội dung* </label>
                <textarea type="text" placeholder="Nội dung liên hệ" rows={4} />
              </div>
            </Col>
            <Col lg="4" md="6" xs="12">
              <div className="input__text">
                <label htmlFor=""> Email* </label> <br />
                <input type="email" placeholder="Nhập địa chỉ Email" />
              </div>
            </Col>
            <button className="addToCart__btn button__color">
              <Link to="/success">Gửi tin nhắn</Link>
            </button>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
