import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { key: Math.random().toString(), value: enteredGoal }
    ])
  }

  return (
    <View style={styles.screen}>
      <GoalInput 
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
        enteredGoal={enteredGoal}
      />
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem>
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