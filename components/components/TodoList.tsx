import { View, Text, TextInput, FlatList, Button, Pressable } from 'react-native'
import { useState } from 'react'

interface Todo{
  id: string
  task: string
}

const TodoList = () => {
const [todos, setTodos] = useState<Todo[]>([])
const [task, setTask] = useState<string>('')


//add todo here
const addTodos = () =>{
  setTodos([...todos, {id:Date.now(), task}])
  setTask('')
}


//remove todo here
const removeTodos = (id: number) =>{
  setTodos(todos.filter((todo) => todo.id !== id))
}
//update todo here

//render todos here


  return (
    <View>
      <Text>My Todos</Text>
      <TextInput value={task} placeholder='Enter your todo' onChangeText={setTask}/>
      <Button title='Add Todo' onPress={addTodos}/>
      <FlatList data={todos} keyExtractor={item => item.id.toString()} renderItem={({item}) => <Pressable  onPress={removeTodos}><Text>{item.task}</Text></Pressable>}/>
    </View>
  )
}

export default TodoList