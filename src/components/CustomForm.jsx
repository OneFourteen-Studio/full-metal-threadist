import { useState } from "react"
import './CustomForm.css'

const CustomForm = ({ status, message, onValidated }) => {
    
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email
        })
    }

  return (
    <form className="mc-form" onSubmit={handleSubmit}>
        {status === 'error' && (
            <div 
                className="message" 
                dangerouslySetInnerHTML={{__html: message}}
            ></div>
        )}

        {status === 'success' && 
            <div className="message">
                Thanks for subscribing!
            </div>
        }

        <input 
            className="subscribe-input"
            placeholder='Email'
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
        />
        <input className="subscribe-btn" type='submit' value='Join us!' />
    </form>
  )
}

export default CustomForm