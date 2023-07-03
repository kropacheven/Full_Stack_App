import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
//Context
import { useContext } from "react";
import UserContext from "../context/UserContext";

const UpdateCourseDesc = (props) => {
    let navigate = useNavigate();
    const { authUser, cred } = useContext(UserContext);
    let { id } = useParams();
    const title = useRef(null);
    const description = useRef(null);
    const estimatedTime = useRef(null);
    const materialsNeeded = useRef(null);
    const [errors, setErrors] = useState([]);

    if (id !== authUser.id) {
        navigate("/forbidden");
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const course = {
            title: title.current.value,
            description: description.current.value,
            estimatedTime: estimatedTime.current.value,
            materialsNeeded: materialsNeeded.current.value
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

        let url = `http://localhost:5000/api/courses/${id}`;

        try {
            const response = await fetch(url, fetchOptions);
            //console.log(response);
            if (response.status === 204) {
                console.log(`${course.title} is successfully updated and posted!`);
                navigate("/");
            } else if (response.status === 400) {
                const data = await response.json();
                //console.log(data);
                setErrors(data.errors);
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log(error);
            navigate("/error");
        }

    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <div className="wrap">
            <h2>Update Course</h2>
            {errors.length ? (
                    <div>
                        <h2 className="validation--errors--label">Validation errors</h2>
                        <div className="validation-errors">
                            <ul>
                                {errors.map((error, i) => <li key={i}>{error}</li>)}
                            </ul>
                        </div>
                    </div>
                ) : null}
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