import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert
} from 'react-native'

function App() {
  return(
    <SafeAreaView>
    <View>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Button title="Press me"
        onPress={() => Alert.alert('Button with adjusted color pressed')}>
      </Button>
    </View>
  </SafeAreaView>
  )
}

export default App;