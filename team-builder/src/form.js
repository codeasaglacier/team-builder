import React, { useState } from 'react';

const Form = props => {

    const [ member, setMember] = useState({name:'', age: '', favColor:''})

    // const [ team, setTeam ] = useState([])

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const submitHandler = event => {
        event.preventDefault()
        props.setTeam(prevTeam => [ ...prevTeam, member ])
        setMember({ name: '', age: '', favColor: '' })
    }


    return (
        <div>

            <form onSubmit = {submitHandler}>

                <label>
                    Name:
                    <input required name = 'name' value = { member.name } onChange = { changeHandler } type = 'text'/>
                </label>
                <br />
                <label>
                    <input name = 'age' value = { member.age } onChange = { changeHandler } type = 'number'/>
                </label>
                <br />
                <label>
                    <select name = 'favColor' value={ member.favColor } onChange = { changeHandler }>
                    <option value = ''></option>
                    <option value = 'Red'>Red</option>
                    <option value = 'Blue'>Blue</option>
                    <option value = 'Green'>Green</option>
                    <option value = 'Vantablack'>Vantablack</option>
                    </select>
                </label>
                <button type = 'submit'>Submit</button>
            </form>


        </div>

    )
}

export default Form