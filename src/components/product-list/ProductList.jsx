import "./product-cards.scss";
import ProductCard from "../product-card/ProductCard";
import data from "./data.json";
import { Container, Row, Col } from "react-bootstrap";

const ProductList = () => {

  return (
    <Container className="pt-4">
      <Row>
        {
          data.map((data, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <ProductCard {...data} />
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default ProductList;