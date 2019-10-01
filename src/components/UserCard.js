import React from 'react';
import '../App.css'

class UserCard extends React.Component{
    

    render(){
        return (
            <div className="card">
                <div className="img-container">
                    <img className="user-photo" src={this.props.photo} />
                </div>
                <div className="user-info">
                    <p className="username">{this.props.username}</p>
                    <div className="follow-info">
                        <p className="subtitle">Followers:</p>
                        <p className="followers"> {this.props.followers}</p>
                        
                        <p className="subtitle">Following:</p>
                        <p className="following"> {this.props.following}</p>
                    </div>
                    <p className="subtitle bio_title">{`${this.props.username}'s Bio`}</p>
                    <p className="bio">{this.props.bio}</p>
                    
                    <p className="subtitle">Github Url: </p>
                    <p className="url">{this.props.url}</p>
                </div>
            </div>
        )
    }
}

export default UserCard