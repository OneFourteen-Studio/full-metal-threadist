import { useState, useEffect } from "react"

import './CustomForm.css'

const CustomForm = ({ status, message, onValidated }) => {
    
    const [email, setEmail] = useState('')

    useEffect(() => {
        if(status === "success") clearFields();
    }, [status])
    
    const clearFields = () => {
        setEmail('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf('@') > -1 &&
        onValidated({
            MERGE0: email
        })
    }

  return (
    <form className="mc-form" onSubmit={handleSubmit}>

    <p className='contact-tag'>
        {status === 'success'
            ? 'Success!'
            : "Join the email list for future updates!"
        }
    </p> 
        {status === 'sending' && (
        <div className='message sending-message'>
            sending...
        </div> 
    )}

        {status === 'error' && (
            <div 
                className="message error-message" 
                dangerouslySetInnerHTML={{__html: message}}
            />
        )}

        {status === 'success' && 
            <div 
                className="message success-message"
                dangerouslySetInnerHTML={{ __html: message }}
            /> 
        }

        {status !== 'success' ? (
            <div className="mc-field-container">
                <input 
                    className="subscribe-input"
                    placeholder='Email'
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
            </div>
        ): null}

        {status !== 'success' ? (
            <input className="subscribe-btn" type='submit' value='Join us!' />
        ): null}

        
    </form>
  )
}

export default CustomForm