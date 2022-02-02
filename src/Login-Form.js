import { useState } from "react";

function Login(){

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [result, setResult] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const form_data = new FormData();
        form_data.append("1", form.email);
        form_data.append("2", form.password);  

        fetch('login', {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: form_data
        })
            .then(response => console.log(response))
            .then(response => response.json())
            .then(html => setResult(html))
        
    };

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Login to get a Tocken</h4>
            <input type="email" name="email" onChange={onChange} placeholder="Email (e.g. name@example.com)" />
            <input type="password" name="password" onCanPlay={onChange} placeholder="" />
            <button name="submit">Get Tocken</button>
        </form>
    );


}

export default Login;