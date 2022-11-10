import React from 'react'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Email</label>
                <input type='email'></input>
                <button className='btn'>Sign up</button>
            </form>
        </div>
    )
}

export default Form
