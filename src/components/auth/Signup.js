import { useState } from "react"

function Signup() {
    const [formData, setFormData] = useState({
        email: '', // required
        password: '', // required
        username: '', // optional
        coins:100
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div className="signup-container">
            <h1>Inscription</h1>
            <form className='login-form' onSubmit={e => handleSubmit(e)}>
                <div className="form-element">
                    <label htmlFor="username-s">Nom d'utilisateur</label>
                    <input className="input-form" id="username-s" type='text' placeholder='Username' value={formData.username} name='username' onChange={e => handleChange(e)} ></input>
                </div>
                <div className="form-element">
                    <label htmlFor="mail-s">Adresse mail</label>
                    <input className="input-form" id="mail-s" type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
                </div>
                <div className="form-element">
                    <label htmlFor="password-s">Mot de passe</label>
                    <input className="input-form" id="password-s" type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                </div>
                <button className='login-btn' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup