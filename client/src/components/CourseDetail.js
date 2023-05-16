import React from "react";
import { NavLink, useParams } from "react-router-dom";

import CourseDesc from "./CourseDesc";

const CourseDetail = (props) => {
    let { id } = useParams();
    let results = props.data;
    let courses = results.filter(course => course.id == id).map(course => <CourseDesc title={course.title} desc={course.description} time={course.estimatedTime} material={course.materialsNeeded}  firstName={course.owner.firstName} lastName={course.owner.lastName} key={course.id}/>);
    
    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <NavLink className="button" to="update">Update Course</NavLink>
                    <NavLink className="button" to="/">Delete Course</NavLink>
                    <NavLink className="button button-secondary" to="/">Return to List</NavLink>
                </div>
            </div>
            {courses}
        </main>
    );
}

export default CourseDetail;