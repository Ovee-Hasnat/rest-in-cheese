import React from "react";
import { Component } from "react";
import MenuItem from "./menuItem";
import DishDetail from "./DishDetails";
import { Alert, Button, CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments } from "../../redux/actionCreators";
import Loading from "./loading";



const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addcomment: (dishId, author, comment) => dispatch(addComment(dishId, author, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
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

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        document.title = "RIC . Menu"

        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            )
        }
        else if (this.props.dishes.errMsg != null) {
            return (
                <Alert color="danger">{this.props.dishes.errMsg}</Alert>
            )
        }
        else {
            const menu = this.props.dishes.dishes.map(item => {
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
                const comments = this.props.comments.comments.filter(comment => {
                    return comment.dishId === this.state.selectedDish.id;
                })
                dishDetail = <DishDetail dish={this.state.selectedDish} comments={comments}
                    addComment={this.props.addcomment} commentIsLoading={this.props.comments.isLoading} />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);