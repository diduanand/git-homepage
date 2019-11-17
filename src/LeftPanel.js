import React from 'react'
import './App.css';

    const LeftPanel = ({ userInfo }) => {
      return (
        <div className="LeftPanelStyle">
            <img className="userImage" src={userInfo.avatar_url} />
            <p className="userName">{userInfo.name}</p>
            <p className="userLogin">{userInfo.login}</p>
            <p className="userBio">{userInfo.bio}</p>
            <button> Edit bio</button>
            <div className="otherDetails">
            <i class="material-icons">people</i>{userInfo.company}<br/>
            <i class="fa fa-map-marker" font-size="24px"></i>{userInfo.location}
            <i class="material-icons">mail-outline</i>{userInfo.email}
          </div>
        </div>
      )
    };

    export default LeftPanel