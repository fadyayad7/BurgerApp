import React, { Component } from "react";

import "./Burger.css";

class Burger extends Component {
  state = {
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meet: 0,
  };

  addRemoveIngredients = (action, ingredient) => {
    let { lettuce, tomato, cheese, meet } = this.state;
    let stateValue;

    switch (ingredient) {
      case "lettuce": {
        stateValue = lettuce;
        break;
      }
      case "tomato": {
        stateValue = tomato;
        break;
      }
      case "cheese": {
        stateValue = cheese;
        break;
      }
      case "meet": {
        stateValue = meet;
        break;
      }
      default:
        break;
    }
    if (action === "add") {
      stateValue += 1;
    } else {
      stateValue -= 1;
    }
    this.setState({ [ingredient]: stateValue > 0 ? stateValue : 0 });
  };

  burgerContent = () => {
    let { lettuce, tomato, cheese, meet } = this.state;
    let burger = [];

    //outputting the lettuce
    for (let i = 0; i < lettuce; i++) {
      burger.push(<div key={burger.length} className="lettuceSide"></div>);
    }
    //outputting the tomato
    for (let i = 0; i < tomato; i++) {
      burger.push(<div key={burger.length} className="tomatoSide"></div>);
    }
    //outputting the cheese
    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className="cheeseSide"></div>);
    }
    //outputting the meet
    for (let i = 0; i < meet; i++) {
      burger.push(<div key={burger.length} className="meetSide"></div>);
    }
    return burger;
  };

  render() {
    return (
      <React.Fragment>
        <div className="burgerIngredients">
          <div className="topSide"></div>
          {this.burgerContent()}
          <div className="bottomSide"></div>
        </div>

        <div className="ingredientsBlock">
          <p>Lettuce</p>
          <div className="ingsBtns">
            <button
              className="ingredientBtn"
              onClick={() => this.addRemoveIngredients("add", "lettuce")}
            >
              add
            </button>
            <button
              className="ingredientBtn"
              onClick={() => this.addRemoveIngredients("remove", "lettuce")}
            >
              remove
            </button>
          </div>
          <p>Tomato</p>
          <div className="ingsBtns">
            <button
              className="ingredientBtn"
              onClick={() => this.addRemoveIngredients("add", "tomato")}
            >
              add
            </button>
            <button
              className="ingredientBtn"
              onClick={() => this.addRemoveIngredients("remove", "tomato")}
            >
              remove
            </button>
          </div>
          <p>Cheese</p>
          <div className="ingsBtns">
            <button
              className="ingredientBtn"
              onClick={() => this.addRemoveIngredients("add", "cheese")}
            >
              add
            </button>
            <button
              className="ingredientBtn"
              onClick={() => this.addRemoveIngredients("remove", "cheese")}
            >
              remove
            </button>
          </div>
          <p>Meet</p>
          <div className="ingsBtns">
            <button
              className="ingredientBtn"
              onClick={() => this.addRemoveIngredients("add", "meet")}
            >
              add
            </button>
            <button
              className="ingredientBtn"
              onClick={() => this.addRemoveIngredients("remove", "meet")}
            >
              remove
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Burger;
