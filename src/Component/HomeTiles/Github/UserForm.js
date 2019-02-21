import React from 'react'




const UserForm = (props) => {
    return(
        <form onSubmit={props.userInfo}>
            <h4>Enter Github Username</h4>
            <input placeholder="Username" type='text' name='username' />
            <br></br>
            <button>Submit</button>
        </form>
    )
}

export default UserForm