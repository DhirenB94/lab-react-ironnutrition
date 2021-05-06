import React from 'react';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import AddFood from './components/AddFood'

class App extends React.Component {
  state = {
    foods: foodsJSON,
    filteredFoods: foodsJSON,
    searchKeyword: ""
  }

  addFoodF = (newFood) => {
    this.setState({
      foods: this.state.foods.concat(newFood)
    });
  };
  handleSearch = (event) => {
    this.setState({
      searchKeyword: event.target.value,
      filteredFoods: this.state.foods.filter((food) => {
        return food.name.toLowerCase()
        .indexOf(event.target.value.toLowerCase())!==-1 
      })
    });
  };
  
  
  
  render () {
    const {foods} = this.state
    return (
      <div className="App">
        Search for food:<input onChange={this.handleSearch}></input>
        <AddFood addFoodP={this.addFoodF}/>
        {this.state.filteredFoods.map((food, index) => {
          return <FoodBox
          key={index}
          name={food.name}
          calories={food.calories}
          image={food.image} />
        })}

        
      </div>
    );
  };
};

export default App;
