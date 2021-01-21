import React from "react";
import { useState, useEffect } from "react";
import { Form, FormControl, Button, Row, Col, Container } from "react-bootstrap";
import { Redirect, useParams } from "react-router-dom";
import ItemDetailsShow from "./ItemDetailsShow";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const OneItem = () => {
  let { batchId, foodId } = useParams();
  const [foodDetails, setFoodDetails] = useState({});
  const [batchDetails, setBatchDetails] = useState({});
  const userId = sessionStorage.getItem("userId");
  const userType = sessionStorage.getItem("userType");
  // const userId = "60079ec9f7b7a342e072ecc2"  //hardcoded for now 
  const [isCollected, setIsCollected] = useState(false)

  // const isEmptyObject = (value) => {
  //   return Object.keys(value).length === 0 && value.constructor === Object;
  // }

  useEffect(() => {
    axios.get(`/batch/${batchId}`).then((response) => {
      const batchData = response.data;
      console.log("batchData reponse.data", batchData)
      batchData.foodListings.forEach((foodItem) => {
        if (foodItem._id === foodId) {
          setFoodDetails(foodItem);
          return;
        }
      });
      setBatchDetails(batchData);
    });
  }, []);

  const handleCollect = () => {
    console.log("handling collect Click")
    axios.put("/user/collections/new", ({ "batchID": batchId, "listID": foodId, "userID": userId }))
      .then((response) => {// response is updatedUser
        delete response.data.password;
        console.log("collected! response is User Doc without password ", response)
        setIsCollected(true)
      })
      .catch((error) => {
        console.log("error", error)
        console.log("error response", error.response.data.error)
      })
    console.log("after axios")
  }

  if (isCollected === true) {
    return <Redirect to={"/collections"} />
  }

  const collectBtn = (
    <Button onClick={handleCollect} style={{ margin: "10px 0" }}>
      Collect
    </Button>
  )


  const toShowCollectBtnOrNot = (userType === "Recipient") ? collectBtn : ""

  return (
    <Container fluid>
      <Row>
        <ItemDetailsShow foodData={foodDetails} batchData={batchDetails} />
        {/* <ItemDetailsShow foodData={foodDetails} batchData={batchData} /> */}
      </Row>

      <Row>
        <Col>
          {toShowCollectBtnOrNot}
        </Col>

        <Col>
          <Button
            href="/listings"
            style={{ margin: "10px 0" }} >
            Back
        </Button>
        </Col>

      </Row>
    </Container >
  );
};

export default OneItem;
