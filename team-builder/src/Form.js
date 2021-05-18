import React, { useState } from "react";

export default function Form(props){
    const {values, update, submit} = props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name,value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return(
        <form onSubmit={onSubmit}>
            <label> Name:
                <input value={values.name} name='name' placeholder='Lebron James' type='text' onChange={onChange} />
            </label>

            <label> Position:
            <input value={values.role} name='role' placeholder='small forward' type='text' onChange={onChange} />
            </label>

            <select value={values.team} name='team' onChange={onChange}>
                <option value=''>--Select a Team</option>
                <option value='Clippers'>Clippers</option>
                <option value='Jazz'>Jazz</option>
                <option value='Lakers'>Lakers</option>
                <option value='Nuggets'>Nuggets</option>
            </select>

            <div className='submit'>
                <button disabled={!values.name || !values.role || !values.team}>submit</button>
            </div>
        </form>
    )
}