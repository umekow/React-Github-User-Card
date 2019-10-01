import React from 'react';

class UserCard extends React.Component{
    

    render(){
        return (
            <div className="card">
                <img className="user-photo" src={this.props.photo} />
                <p className="username">{this.props.username}</p>
                <p className="followers">{this.props.followers}</p>
                <p className="following">{this.props.following}</p>
                <p className="url">{this.props.url}</p>
            </div>
        )
    }
}

export default UserCard