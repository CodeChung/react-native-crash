import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { key: Math.random().toString(), value: goalTitle }
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId)
    })
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput 
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
        onCancel={cancelGoalHandler}
      /> 
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            onDelete={removeGoalHandler}
            id={itemData.item.key}>
            {itemData.item.value}
          </GoalItem>
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
})