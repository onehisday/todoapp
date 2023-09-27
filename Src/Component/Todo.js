import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';


const Todo = ({id, title, complete }) => {
  const handletongleTodo = () => {
    ref.doc(id).update({
      complete: !complete,
    });
  }
  const ref = firestore().collection('todos');
  return (
    <List.Item
      title={title}
      onPress={handletongleTodo}
      left={props => <List.Icon {...props} icon={complete ? 'check' : 'cancel'} />}
    />
  )
}
export default Todo

const styles = StyleSheet.create({})