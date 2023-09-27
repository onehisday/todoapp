import { StyleSheet, Text, View, ScrollView , Button, ToastAndroid, FlatList} from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';
import { Appbar, TextInput } from 'react-native-paper';

const Index = () => {
  const ref = firestore().collection('todos');
  const [todo, setTodo] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [todos, setTodos] = React.useState([]);
  React.useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { title, complete } = doc.data();
        list.push({
          title,
          complete,
        });
      });

      setTodos(list);
     
      if (loading) {
        setLoading(false);
      }
    });
  });
 const handleaddTodo = async () => {
    await ref.add({
      title: todo,
      complete: false,
    });
    setTodo('');
       ToastAndroid.show("Thêm thành công", ToastAndroid.SHORT);
 
 }
 const  renderitem = ({item}) => {
   return(
     <View>
       <Text>{item.title}</Text>
     </View>
   )
 }
  return (
    <View style={{flex: 1}}>
      <Appbar style={{backgroundColor:"blue"}}>
        <Appbar.Content title={'TODOs List'} />
      </Appbar>
      <FlatList 
        style={{flex: 1}}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderitem}
      />

      <TextInput label={'New Todo'} value={todo} onChangeText={setTodo} />
      <Button onPress={handleaddTodo} title='Add data'/>

    </View>
  )
}

export default Index

const styles = StyleSheet.create({})