import React from "react";
import ReactMarkdown from 'react-markdown'

const CourseDesc = (props) => {

    return (
        <div className="wrap">
        <h2>Course Detail</h2>
        <form>
            <div className="main--flex">
                <div>
                    <h3 className="course--detail--title">Course</h3>
                    <h4 className="course--name">{props.title}</h4>
                    <p>By {props.firstName} {props.lastName}</p>
                    <span> <ReactMarkdown>{props.desc}</ReactMarkdown> </span>
                </div>
                <div>
                    <h3 className="course--detail--title">Estimated Time</h3>
                    <p>{props.time}</p>

                    <h3 className="course--detail--title">Materials Needed</h3>
                    <ul className="course--detail--list">
                        <li><ReactMarkdown>{props.material}</ReactMarkdown></li>
                    </ul>
                </div>
            </div>
        </form>
    </div>
    );
}

export default CourseDesc;