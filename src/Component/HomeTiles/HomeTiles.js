import React from 'react';
import GithubMain from './Github/GithubMain';
import './HomeTiles.css'
import LinkedIn from './LinkedIn/LinkedInMain';





const HomeTiles = () => {

    return(
        <div id='tiles'>
            <div className="boxes"><GithubMain /></div>
            <div className="boxes"><LinkedIn /></div>
            <div className="boxes">These elements are working</div>
            <div className="boxes">These elements are working</div>
            <div className="boxes">These elements are working</div>
            <div className="boxes">These elements are working</div>
        </div>
    );
}

export default HomeTiles