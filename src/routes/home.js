import { useState } from "react";

export default function Home() {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    return (
        <div>
            <h1>Todo</h1>
            <form>
                <input type="text" onChange={onChange} />
                <button>Add</button>
            </form>
            <ul></ul>
        </div>
    );
}
