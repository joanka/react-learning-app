import React, { Component, Fragment } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Exercises from './Exercises';
import {categories, exercises} from '../store';

class App extends Component {
  state = {
    exercises,
    category: '',
    exercise: {},
    editMode: false
  }

  getExercisesByCategory() {
    const initExercises = categories.reduce((exercises, category) => (
      {...exercises,
      [category]: []}
    ), {})
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const {category} = exercise;
      exercises[category] = [...exercises[category], exercise];
      return exercises;
    }, initExercises)
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
      editMode: false
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises, editMode, exercise}) => ({
      exercises: exercises.filter((ex) => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }))
  }

  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
      editMode: true
    }))
  }

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter((ex) => ex.id !== exercise.id), exercise],
      exercise
    }))
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === exercise.id),
      editMode: false
    }))
  }

  handleExerciseToggle = () => {
    this.setState(() => ({
      editMode: false,
      exercise: {}
    }))
  }

  render() {
    const exercises = this.getExercisesByCategory(),
    { category, exercise, editMode } = this.state;
    return (
      <Fragment>
        <Header
          categories={categories}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          categories={categories}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          editMode={editMode}
          onEdit={this.handleExerciseEdit}
          onEditToggle={this.handleExerciseToggle}/>
        <Footer
          categories={categories}
          category={category}
          onSelect={this.handleCategorySelected}/>
      </Fragment>
    );
  }
}

export default App;
