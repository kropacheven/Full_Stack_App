import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
//Context
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";


const CreateCourse = () => {
    let navigate = useNavigate();
    const { authUser, cred } = useContext(UserContext);
    console.log(cred);
    const title = useRef(null);
    //const userId = useRef(userId);
    const description = useRef(null);
    const time = useRef(null);
    const materials = useRef(null);
    const [errors, setErrors] = useState([]);

    //Submit event handler function for course creation:
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Build up user object from Refs above
        const newCourse = {
            title: title.current.value,
            description: description.current.value,
            estimatedTime: time.current.value,
            materialsNeeded: materials.current.value, 
            userId: authUser.id
        }

        //Encoded credentials for granting access only to authorized users:
        const encodedCredentials = btoa(`${authUser.emailAddress}:${cred}`);
        console.log(encodedCredentials);

        // Configure fetch options:
        const fetchOptions = {
            method: "POST",
            headers: {
                Authorization: `Basic ${encodedCredentials}`,
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(newCourse)
        }


        try {
            const response = await fetch("http://localhost:5000/api/courses", fetchOptions);
            //console.log(fetchOptions);
            //console.log(response);

            if (response.status === 201) {
                console.log(`${newCourse.title} is successfully created and posted!`);
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
        navigate("/");
    };


    return (
        <main>
            <div className="wrap">
                <h2>Create Course</h2>
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
                            <input id="courseTitle" name="courseTitle" type="text" ref={title}></input>

                            <p> By <strong>{authUser.firstName} {authUser.lastName}</strong></p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea id="courseDescription" name="courseDescription" ref={description}></textarea>
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" ref={time}></input>

                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded" ref={materials}></textarea>
                        </div>
                    </div>
                    <button className="button" type="submit" onClick={handleSubmit}>Create Course</button><button className="button button-secondary" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </main>
    );
}


export default CreateCourse;