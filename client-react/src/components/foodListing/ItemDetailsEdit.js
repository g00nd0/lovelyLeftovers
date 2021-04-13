import React from "react";
import { FormControl, Row, Col, Container } from "react-bootstrap";

const ItemDetailsEdit = ({ foodData }) => {
  return (
    <Container>
      <Row>
        <Col>
          Title:{" "}
          <FormControl type="text" title="title" value={foodData.title} />
        </Col>
      </Row>

      <Row>
        <Col>
          Quantity:{" "}
          <FormControl
            type="number"
            title="quantity"
            value={foodData.quantity}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          Category:{" "}
          <FormControl type="text" title="category" value={foodData.category} />
        </Col>
      </Row>

      <Row>
        <Col>
          Is this Halal?:{" "}
          <FormControl
            type="boolean"
            title="isHalal"
            value={foodData.isHalal}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          Is this vegetarian?:{" "}
          <FormControl
            type="boolean"
            title="isVegetarian"
            value={foodData.isVegetarian}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          Description:{" "}
          <FormControl
            type="text"
            title="description"
            value={foodData.description}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          Best Before Date:{" "}
          <FormControl
            type="text"
            title="bestBefore"
            value={foodData.bestBefore}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          Collection Address:{" "}
          <FormControl
            type="text"
            title="collectionAddress"
            value={foodData.collectionAddress}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          Contact Person:{" "}
          <FormControl
            type="text"
            title="contactName"
            value={foodData.contactName}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          Contact Number:{" "}
          <FormControl
            type="number"
            title="contactNumber"
            value={foodData.contactNumber}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetailsEdit;
