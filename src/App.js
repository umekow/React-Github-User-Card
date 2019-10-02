import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard'
import axios from 'axios'


class App extends React.Component{
  state= {
    //username
    github_user: {}, 
    //user's followers
    followers: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/umekow').then(response => {
        //get user information

        this.setState({
          github_user: response.data, 
        });

      });

    axios.get('https://api.github.com/users/umekow/followers').then(
      response => { 
        
        console.log(response.data)
        this.setState({
         
          followers: response.data,
        });
      });

  }



  render() {
    return(
      <>
        <UserCard
          photo={this.state.github_user.avatar_url}
          username={this.state.github_user.login}
          followers={this.state.github_user.followers}
          following={this.state.github_user.following}
          bio={this.state.github_user.bio}
          url={this.state.github_user.url}
        />

        {
          this.state.followers.map(follower => 
            
              <UserCard
              key={`${Date.now()}${Math.random()}`}
              photo={follower.avatar_url}
              username={follower.login}
              followers={follower.followers}
              following={follower.following}
              bio={follower.bio}
              url={follower.url}
              />
            
            )
        }
      </>  
    )

  }
}

export default App;
