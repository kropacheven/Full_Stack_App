import React from "react";
import { NavLink } from "react-router-dom";

const Course = (props) => {
    let path = `courses/${props.id}`;
    //console.log(props.key);
    return (
        <NavLink className="course--module course--link" to={path}>
            <h2 className="course--label">Course</h2>
            <h3 className="course--title"> {props.title} </h3>
        </NavLink>
    );
}

export default Course;