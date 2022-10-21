import React from "react";
import { Component } from "react";
import Dishes from "../../data/dishes";
import MenuItem from "./menuItem";
import DishDetail from "./DishDetails";

class Menu extends Component {
    state = {
        dishes: Dishes,
        selectedDish: null
    }

    onDishSelect = dish => {
        console.log(dish);
        this.setState({ 
            selectedDish: dish
        });
        //console.log(this.state.selectedDish)
    }

    render() {
        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem 
                    dish={item}
                    key={item.id}
                    onDishSelect = {() => this.onDishSelect(item)} 
                />
            )
        });

        let dishDetail = null;
        if (this.state.selectedDish != null){
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;