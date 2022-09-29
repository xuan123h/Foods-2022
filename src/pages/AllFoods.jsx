import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../styles/all-foods.css";
import "../styles/pagination.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  // Lỗi filter do hàm filter nó sẽ trả về một giá trí boolean nào đó .
  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") return item;
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return item;
    return false;
  });
  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  // Slice : in to 0 with 8
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // Sort with category
  const [sortState, setSortState] = useState("default");
  const sortMethods = {
    default: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.title < b.title ? -1 : 1) },
    descending: { method: (a, b) => (a.title > b.title ? -1 : 1) },
    highPrice: { method: (a, b) => (a.price < b.price ? 1 : -1) },
    lowPrice: { method: (a, b) => (a.price > b.price ? 1 : -1) },
  };
  //
  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select
                  className="w-50"
                  defaultValue={"default"}
                  onChange={(e) => setSortState(e.target.value)}
                >
                  <option value="default"> Default </option>
                  <option value="ascending"> Alphabetically, A-Z </option>
                  <option value="descending"> Alphabetically, Z-A </option>
                  <option value="highPrice"> High Price </option>
                  <option value="lowPrice"> Low Price </option>
                </select>
              </div>
            </Col>
            {displayPage.sort(sortMethods[sortState].method).map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
