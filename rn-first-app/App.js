import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput placeholder='Course Goal' style={{ width: '80%', borderColor: 'black', borderWidth: 1, padding: 10 }}/>
        <Button title='ADD' />
      </View>
      <View>

      </View>
    </View>
  );
}
 