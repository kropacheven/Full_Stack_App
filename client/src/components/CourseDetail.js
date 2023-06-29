import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CourseDesc from "./CourseDesc";

//Context
import { useContext } from "react";
import UserContext from "../context/UserContext";

const CourseDetail = (props) => {
    let { id } = useParams();
    const { authUser, cred } = useContext(UserContext);
    let results = props.data;
    let courses = results.filter(course => course.id == id).map(course => <CourseDesc title={course.title} desc={course.description} time={course.estimatedTime} material={course.materialsNeeded}  firstName={course.owner.firstName} lastName={course.owner.lastName} key={course.id}/>);
    let theCourse = results.filter(course => course.id == id);
    let navigate = useNavigate();

    //Delete event handler function:
    const handleDelete = async (e) => {
        e.preventDefault();
        
        const encodedCredentials = btoa(`${authUser.emailAddress}:${cred}`);
        
        // Configure fetch options:
        const fetchOptions = {
            method: "DELETE",
            headers: {
                Authorization: `Basic ${encodedCredentials}`
            }
        }
        
        let url = `http://localhost:5000/api/courses/${id}`;

        const response = await fetch(url, fetchOptions);
        console.log(fetchOptions);
        console.log(response);
        
        navigate("/");
    };

    return (
        <main>
            <div className="actions--bar">
                {  console.log(theCourse) }
                <div className="wrap">
                    <NavLink className="button" to="update">Update Course</NavLink>
                    <NavLink className="button" onClick={handleDelete} >Delete Course</NavLink>
                    <NavLink className="button button-secondary" to="/">Return to List</NavLink>
                </div>

            </div>
            {courses}
        </main>
    );
}

export default CourseDetail;