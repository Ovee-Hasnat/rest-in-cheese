import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";


const MenuItem = (props) => {

    return (
        <div>
            <Card
                style={{ margin: "10px", cursor: "pointer" }}
                onClick={props.onDishSelect}>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                        style={{ opacity: '0.5' }}
                    />
                    <CardImgOverlay>
                        <CardTitle style={{
                            fontSize: '18px', fontFamily: 'fantasy',
                            letterSpacing: '2px'
                        }}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem;