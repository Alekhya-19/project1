import React from 'react';
import data from './data.json';
import image from './cricketimg.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';

let Profile=()=>{
    const profiles=data.profiles;
    return(
        <div className="parent">
            {profiles.map((i,j)=>(
                <div className="child" key={j}>
                    <img src={image} alt="Profile" />
                    <h2>{i.basics.name}</h2>
                    <hr></hr>

                    <a href={"mailto:"+i.basics.email} className="link">
                        {i.basics.email}
                    </a>
                    <br></br>
                    <a href={"tel:"+i.basics.mobile} className="link">
                        {i.basics.mobile}
                    </a>
                    <br></br>
                    <br></br><hr></hr><br></br>
                    <Link to={{pathname:"/resume", index:{value:{j}}}} className="button">VIEW PROFILE</Link>
                </div>
            ))}
        </div>

    )
}
export default Profile;