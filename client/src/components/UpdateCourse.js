import React from "react";
import { useParams } from "react-router-dom";

import UpdateCourseDesc from "./UpdateCourseDesc";

const UpdateCourse = (props) => {
    let { id } = useParams();
    let results = props.data;
    let courses = results.filter(course => course.id === +id).map(course => <UpdateCourseDesc title={course.title} desc={course.description} time={course.estimatedTime} material={course.materialsNeeded}  firstName={course.owner.firstName} lastName={course.owner.lastName} key={course.id}/>);
    return (
        <main>
            {courses}
        </main> 
    );
}

export default UpdateCourse;