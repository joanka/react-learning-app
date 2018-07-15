import React, { Component, Fragment } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Exercises from './Exercises';
import {categories, exercises} from '../store';

class App extends Component {
  state = {
    exercises,
    category: '',
    exercise: {}
  }
  
  getExercisesByCategory() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {    
      const {category} = exercise;
      exercises[category] = exercises[category] 
      ? [...exercises[category], exercise] 
      : [exercise];
      return exercises;     
    },{})
    )
  }
  
  handleCategorySelected = category => {
    this.setState({
      category
    })
  }
  
  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id) 
    }))
  }
  render() {
    console.log(this.getExercisesByCategory());
    const exercises = this.getExercisesByCategory(),
    { category, exercise } = this.state;
    return (
      <Fragment>
        <Header/>
        <Exercises
        exercise={exercise} 
        exercises={exercises}
        category={category}
        onSelect={this.handleExerciseSelected}/>
        <Footer 
          categories={categories} 
          category={category}
          onSelect={this.handleCategorySelected}/>
      </Fragment>
    );
  }
}

export default App;
