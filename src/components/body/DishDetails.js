import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./loadComments";
import CommentForm from "./commentForm";
import { baseURL } from "../../redux/baseURL";


const DishDetail = props => {
    //console.log(props);
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg
                    top
                    src={baseURL + props.dish.image}
                    alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle><strong>{props.dish.name}</strong></CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        {props.dish.price}/-
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments} commentIsLoading={props.commentIsLoading} />
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;