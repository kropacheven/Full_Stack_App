import React from "react";
import { useParams } from "react-router-dom";

import CourseDesc from "./CourseDesc";

const CourseDetail = (props) => {
    let { id } = useParams();
    let results = props.data;
    let courses = results.filter(course => course.id == id).map(course => <CourseDesc title={course.title} desc={course.description} time={course.estimatedTime} material={course.materialsNeeded}  firstName={course.owner.firstName} lastName={course.owner.lastName} key={course.id}/>);
    
    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <a className="button" href="update-course.html">Update Course</a>
                    <a className="button" href="#">Delete Course</a>
                    <a className="button button-secondary" href="index.html">Return to List</a>
                </div>
            </div>
            {courses}
        </main>
    );
}

export default CourseDetail;