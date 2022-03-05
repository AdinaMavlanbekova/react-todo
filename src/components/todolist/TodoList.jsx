import React from 'react';
import Todo from '../todo/Todo.jsx';



class TodoList extends React.Component {

    // onEdit (text) {
    //     alert(text)
    // }

    render() {      


        const arr = this.props.todos.map( (todo) => {
            return <Todo 
            key={todo.id}
             id={todo.id}
             text={todo.title}
             status={todo.status}
             onDelete={this.props.onDelete}
             onCheck={this.props.onCheck}
             onEdit={this.props.onEdit}
             />
        } ) 

        return (
            <div className='todo_wrapper'>
                {arr.length ? arr: <h5 className='text-center mt-3 mb-3'>Please add Todo</h5>}
                {/* {
                    array.map((number) => <h1>Number:{number}</h1>)
                } */}
                {/* {
                    array.map((item) => <h1 style={{color: item.color}}>Number: {item.number}</h1>)
                } */}
            </div>
        )
    }
}


export default TodoList;