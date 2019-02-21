import React, { Component } from 'react';
import axios from 'axios'
import UserForm from "./UserForm"
import Display from "./Display"
import './GithubMain.css'

class App extends Component {
  
  state = {
    clicked: false,
    name: null,
    repos: null,
    bio: null,
    blog: null,
    company: null,
    email: null,
    followers: null,
    following: null,
    html_url: null,
    avatar: null
  }

    getUser = e => {
      e.preventDefault();
      const user = e.target.elements.username.value;

      if(user){
        axios.get(`https://api.github.com/users/${user}`)
        .then(res => {
          const repos = res.data;
          this.setState({
            repos: repos.public_repos,
            name: repos.name,
            bio: repos.bio,
            blog: repos.blog,
            company: repos.company,
            email: repos.email,
            followers: repos.followers,
            following: repos.following,
            html_url: repos.html_url,
            avatar: repos.avatar
          })
          console.log(res.data);
        }).catch(error => {
          this.setState({
            repos: "User not found"
          })
        })

      } else {
        return;
      }
}

  handleClick = () => {
    this.setState({clicked: true})
  }
  handleClick2 = () => {
    this.setState({clicked: false})
  }

  render() {
    return (
      <div className="github">
        
        { !this.state.clicked &&
        
        <img
          style={{cursor: 'pointer'}} 
          height='300px' 
          width='300px' 
          src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png " 
          onClick={this.handleClick}
          alt=""
        />

        }
        { this.state.clicked &&

          <div>
            <UserForm />
            <Display />
            <div>
              <button onClick={this.handleClick2}>
                Back
                </button>
              <button>
                Visit on GitHub
              </button>
            </div>
          </div>

        }        
      </div>
    );
  }
}

export default App;
