import { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import CreateTodo from './components/create-todo/CreateTodo';
import TodoList from './components/todolist/TodoList';



// function App() {
//   return (
//     <div className="App">
//       Todo
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

componentDidMount() {
   console.log("did Mount")
   const localData = JSON.parse(localStorage.getItem("todos")) || [];
   this.setState({todos: localData});
}

componentDidUpdate() {
   console.log("did Update")
   localStorage.setItem("todos", JSON.stringify(this.state.todos) )
}

componentWillUnmount() {
   console.log("will Unmout")
}





  handleCreateTodo(str) {
    this.setState({ todos: [...this.state.todos, {id: Math.random(), title: str}]})
  }
  onDelete (id) {
    const newTodos = this.state.todos.filter( (item) => item.id !== id); 
    this.setState({todos: newTodos})
}

onCheck(id){
   const newCheck = this.state.todos.map( (todo) => {
     if(todo.id === id){
       return{...todo, status: !todo.status}
   }
   return todo;
   })
   this.setState({todos: newCheck})
} 

onEdit(id, newText) {
  const newArr = this.state.todos.map( (todo) => {
    if(todo.id === id ){
      return{...todo, title: newText}
    }
    return todo;
  } ) 
  this.setState({todos: newArr})
}

  render() {
    return (
      <div className='App'>
        <Header count={this.state.todos.length} done={this.state.todos.filter((todo) => todo.status).length} />
        <main className='main'>
          <CreateTodo onCreate={this.handleCreateTodo} />
          <TodoList 
          todos={this.state.todos} 
          onDelete={this.onDelete}
          onCheck={this.onCheck}
          onEdit={this.onEdit}
          />
        </main>
      </div>
    )
  }
}

export default App;
