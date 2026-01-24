import React from "react";
import { Card, CardBody, CardImg, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Cards({ image, rating, title, paragraph, price, renderRatingIcons }) {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <CardImg variant="top" src={image} />
        </div>
        <CardBody>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className="d-flex align-item-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <div className="add_to_card">
              <Link to="/" className="">
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Cards;
