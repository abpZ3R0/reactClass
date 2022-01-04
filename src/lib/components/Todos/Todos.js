import Todo from "../Todo/Todo";

const Todos = ({todos, deleteTodo}) => {
    return (
        <ul className="list-group">
            {
                todos.length > 0 && todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} /> )
            }
        </ul>
    )
}

export default Todos;