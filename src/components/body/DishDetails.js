import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./loadComments";

const DishDetail = props => {
    //console.log(props);
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg
                    top
                    src={props.dish.image}
                    alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle><strong>{props.dish.name}</strong></CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price}/- </p>
                    </CardText>
                    <hr />
                    <LoadComments comments={props.dish.Comment} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;