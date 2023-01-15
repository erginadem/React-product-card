import React from "react";
import "./product-card.scss"
import { Card } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const ProductCard = (props) => {

  const RatingStars = ({ rate }) => {
    return (
      <div>
        {[...new Array(5)].map((item, index) => (index < rate ? <AiFillStar /> : <AiOutlineStar />))}
      </div>
    );
  };

  const { title, image, price, discount, rate } = props;

  let newPrice = price - (price * discount) / 100;

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={`assets/products/${image}`} />
      <Card.Body className="text-center">
        {
          (!discount == 0) && <div className="top-discount">%{discount}</div>
        }
        <h3 className="text-warning fs-4">{RatingStars({ rate })}</h3>
        <h4 className="text-uppercase fs-4">{title}</h4>
        <Card.Text>
          {
            (discount == 0) ? (<Card.Text>
              <span className="text-success fs-4">${price}</span>
            </Card.Text>) : (<Card.Text>
              <span className="me-2 text-secondary fs-4 text-decoration-line-through me-3">${price}</span>
              <span className="text-success fs-4">${newPrice}</span>
            </Card.Text>)
          }
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;





