import React, { useState } from 'react';

function Form(props) {

    const [ member, setMember] = useState({name:'', age: 0, favColor:''})

    // const [ team, setTeam ] = useState([])

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const submitHandler = event => {
        event.preventDefault()
        props.setTeam(prevTeam => [ ...prevTeam, member ])
        setTeam({ name: '' })
    }


    return (
        <div>

            <form onSubmit = {submitHandler}>

                <label>
                    Name:
                    <input name = 'name' value={member.name} onChange = {changeHandler} />
                </label>
                <br />
                <label>
                <input name = 'age' value={member.age} onChange = {changeHandler} type='number'/>
                </label>
                <br />
                <label>
                    <select name = 'favColor'/>
                    <option value = '1'>Red</option>
                    <option value = '2'>Blue</option>
                    <option value = '3'>Green</option>
                    <option value = '4'>Vantablack</option>
                </label>

            </form>


        </div>

    )
}