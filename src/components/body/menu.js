import React from "react";
import { Component } from "react";
import MenuItem from "./menuItem";
import DishDetail from "./DishDetails";
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes : state.dishes,
        comments : state.comments
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false,
    }

    onDishSelect = dish => {
        //console.log(dish);
        this.setState({
            selectedDish: dish
        });
        //console.log(this.state.selectedDish)
        this.toggleModal();
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        document.title = "RIC . Menu"
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    onDishSelect={() => this.onDishSelect(item)}
                />
            )
        });

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id;
            })
            dishDetail = <DishDetail dish={this.state.selectedDish} comments={comments} />
        };
        
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps) (Menu);