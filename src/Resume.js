import React from 'react'; 
import data from './data.json';        /* 'react' is a pre-defined file */
import img from './cricketimg.svg';

let Resume=(p)=>{
    let info=Object.values(p.location.index.value);
    let person=data.profiles[info];
    console.log(person);
    console.log(info);
    return(
        <div className="parent">
            <div className="child">
                <img src={img} alt="image" />
                <h3>{person.basics.name}</h3>
                <h3>{person.basics.email}</h3>
                <h3>{person.basics.mobile}</h3>
            </div>
            <div className="child2">
                <h2>Educational Qualifications</h2>
                <hr></hr>
                {person.education.map((i,j)=>(
                    <div key={j}>
                        <h4>{i.degree}</h4>
                        <ul>
                        <li>{i.percentage}</li>
                        <li>{i.institute}</li>
                        </ul>
                    </div>
                ))}
                <h2>Skills</h2>
                <hr></hr>
                {person.skills.map((i,j)=>(
                    <div key={j}>
                        <h4>{i.type}</h4>
                        {i.values.map((i,j)=>(
                            <div key={j} style={{display:"inline"}}>
                                <span className="skill">
                                    {i}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Resume;