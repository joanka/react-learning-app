import React, { Component, Fragment } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Exercises from './Exercises';
import {categories, exercises} from '../store';

class App extends Component {
  state = {
    exercises
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
  render() {
    console.log(this.getExercisesByCategory());
    const exercises = this.getExercisesByCategory();
    return (
      <Fragment>
        <Header/>
        <Exercises exercises={exercises}/>
        <Footer categories={categories}/>
      </Fragment>
    );
  }
}

export default App;
