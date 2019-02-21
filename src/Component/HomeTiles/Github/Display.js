import React from 'react'


const Display =(props) => {
    return(
        
        <div>
            {props.repos && <p>repos: {props.repos}</p>}
            { props.avatar && <img height="200px" src={props}
            alt="user" />}
            { props.name && <p> name: {props.name}</p>}
            {props.bio && <p>bio: {props.bio}</p>}
            {props.blog && <p>blog: {props.blog}</p>}
            {props.company && <p>company: {props.company}</p>}
            {props.email && <p>email: {props.email}</p>}
            {props.followers ? <p>followers: {props.followers}</p> : null }
            {props.following ? <p>following: {props.following}</p> : null }
            {props.url && <p>url: {props.url}</p>}

        </div>
    )
}

export default Display