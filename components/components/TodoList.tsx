import { View, Text, TextInput,Button, FlatList, Pressable  } from 'react-native'
import React, { useState } from 'react'

interface Todo {
  id: string;
  text: string;
}

// Define the type for the renderTodo function parameter
interface TodoItemProps {
  item: Todo;
}


const TodoList = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [text, setText] = useState<string>('');

const addTodo = () => {
   if(text.trim()){
      setTodo([...todo, {id:Date.now().toString(), text}]);
       setText('');
   }
}

const removeTodo = (id: string) => {
  setTodo(todo.filter((todo) => todo.id !== id));
}
 

const renderTodo =({item}: TodoItemProps) => (
  <Pressable onPress={() => removeTodo(item.id)}  style={{padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray', marginTop:10}}>
    <Text>{item.text}</Text>
  </Pressable>
)
  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' , textTransform: 'uppercase'}}>Todo List</Text>
      <TextInput style={{borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 20}} placeholder="Add a new task" value={text} onChangeText={setText}/>
      <Button title="Add Task" onPress={addTodo} />
        <FlatList  data={todo} renderItem={renderTodo} keyExtractor={(item) => item.id} />
        
    </View>
  )
}

export default TodoList