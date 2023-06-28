import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

//Context
import { useContext } from "react";
import UserContext from "../context/UserContext";

const UpdateCourseDesc = (props) => {
    let navigate = useNavigate();
    const { authUser, cred } = useContext(UserContext);

    const title = useRef(null);
    const description = useRef(null);
    const estimatedTime = useRef(null);
    const materialsNeeded = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const course = {
            title,
            description,
            estimatedTime,
            materialsNeeded
        };

        const encodedCredentials = btoa(`${authUser.emailAddress}:${cred}`);

        // Configure fetch options:
        const fetchOptions = {
            method: "PUT",
            headers: {
                Authorization: `Basic ${encodedCredentials}`,
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(course)
        }

        const response = await fetch("http://localhost:5000/api/courses", fetchOptions);
        console.log(fetchOptions);
        //console.log(response);

        //navigate(-1);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div className="wrap">
            <h2>Update Course</h2>
            <form onSubmit={handleSubmit}>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">Course Title</label>
                        <input
                            id="courseTitle"
                            name="courseTitle"
                            type="text"
                            defaultValue={props.title}
                            ref={title}
                        >
                        </input>

                        <p>By {props.firstName} {props.lastName}</p>

                        <label htmlFor="courseDescription">Course Description</label>
                        <textarea
                            id="courseDescription"
                            name="courseDescription"
                            ref={description} 
                            defaultValue={props.desc}>
                        </textarea>
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">Estimated Time</label>
                        <input
                            id="estimatedTime"
                            name="estimatedTime"
                            type="text"
                            ref={estimatedTime}
                            dafaultValue={props.time} >
                        </input>
                        <label htmlFor="materialsNeeded">Materials Needed</label>
                        <textarea
                            id="materialsNeeded"
                            name="materialsNeeded"
                            ref={materialsNeeded}
                            defaultValue={props.material} >
                        </textarea>
                    </div>
                </div>
                <button className="button" type="submit" onClick={handleSubmit}>Update Course</button><button className="button button-secondary" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default UpdateCourseDesc;