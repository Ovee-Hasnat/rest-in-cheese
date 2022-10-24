import React from "react";
import { Component } from "react";
import Dishes from "../../data/dishes";
import MenuItem from "./menuItem";
import DishDetail from "./DishDetails";
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";

class Menu extends Component {
    state = {
        dishes: Dishes,
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
        const menu = this.state.dishes.map(item => {
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
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        };
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
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

export default Menu;