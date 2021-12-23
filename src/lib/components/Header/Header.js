import { Fragment } from "react";

const Header = ({increment, count}) => {
    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => increment(count + 1)}>Increment</button>
        </>
    )
}

export default Header;