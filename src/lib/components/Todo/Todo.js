const Todo = ({todo, deleteTodo}) => {
    return (
        <li className="list-group-item">
            <span>{todo?.title}</span>
            <span 
                className="text-danger" 
                style={{marginLeft: '30px', cursor: 'pointer'}}
                onClick={() => deleteTodo(todo?.id)}
            >Delete</span>
        </li>
    )
}

export default Todo;