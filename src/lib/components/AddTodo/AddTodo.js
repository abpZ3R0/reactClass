import { useState } from "react";

const AddTodo = ({todos, setTodos, addNewTodo}) => {
    const [inputText, setInputText] = useState("");
    const [error, setError] = useState("");

    const handleClick = () => {

        if(inputText.length === 0){
            setError("Please enter a string");
            return;
        }

        // const newTodo = {
        //     id: todos.length + 1,
        //     title: inputText
        // }
        // const prevTodos = [...todos, newTodo];
        // setTodos(prevTodos);

        // setTodos(prevTodo => {
        //     const newTodo = {
        //         id: prevTodo.length + 1,
        //         title: inputText
        //     }
        //     return [...prevTodo, newTodo];
        // })

        addNewTodo(inputText);

        setInputText("")
    }

    const handleChange = e => {
        setError("")
        setInputText(e.target.value)
    }

    return (
        <>
        <div className="d-flex mb-4 gap-3">
            <input type="text" onChange={(e) => handleChange(e)} value={inputText} className="form-control" placeholder="Add a Todo" />
            <button onClick={handleClick} className="btn btn-secondary btn-lg">Add</button>
        </div>
        <span className="text-danger">{error}</span>
        </>
    )
}

export default AddTodo;