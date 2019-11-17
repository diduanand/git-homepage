import React from 'react'
import './App.css';
import MenuBar from './MenuBar.js';

    const MainContent = ({ repoS }) => {
      return (
        <div className="mainContentStyle">
          <MenuBar />
          <hr className="lineStyle"/>
            {repoS.map((repo) => (
            <div>
                <p className="repoName">{repo.name}</p>
                <p className="repoDescription">{repo.description}</p>
                <div className="repoProp">
                <p className="repoLanguage">{repo.language}</p>
                <p className="repoLicense">{repo.license && repo.license.spdx_id}</p>
                <p>{repo.updated_at}</p>
                </div>
                <hr className="lineStyle"/>
            </div>
          ))}
        </div>
      )
    };

    export default MainContent