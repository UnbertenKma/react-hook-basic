import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function TodoList(props) {
    //USE 2 cái
    const {todos, onTodoClick } = props;

    //mỗi lần thẻ li được click
    function handleClick(todo) {
        if(onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        // <ul className='todo-list'>
        //     {todos.map(todo => (
        //         <li 
        //         key={todo.id} 
        //         //onClick={() => handleClick(todo)}
        //         >
        //             {todo.title}
        //         </li>
        //     ))}
        // </ul>

        <ul className='todo-list'>
            {todos.map(todo => (
                <li 
                key={todo.id}
                onClick= {() => handleClick(todo)}
                >
                    {todo.title}
                </li>
            ))}

        </ul>
    );
}

export default TodoList;