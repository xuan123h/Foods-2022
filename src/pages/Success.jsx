import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Success = (props) => {
  return (
    <Helmet title="Success">
      <CommonSection title="Đơn đặt hàng của bạn"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="mb-4">
                {" "}
                Đơn hàng của bạn đã được đặt thành công.{" "}
              </h2>
              <p> Chúng tôi sẽ giao hàng cho bạn trong thời gian sớm nhất . </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Success;
