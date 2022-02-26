import { useState } from "react"

function Login() {

    const [formData, setFormData] = useState({
        email: '', // required
        password: '' // required
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data.user))
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div className="login-container">
            <h1>Connexion</h1>
            <form className='login-form' onSubmit={e => handleSubmit(e)}>
                <div className="form-element">
                    <label htmlFor="email">Adresse mail</label>
                    <input id="email" className="input-form" type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
                </div>
                <div className="form-element">
                    <label htmlFor="password">Mot de passe</label>
                    <input id="password" className="input-form" type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                </div>
                
                <button className='login-btn' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login