import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const UpdateCourseDesc = (props) => {
    let navigate = useNavigate();

    const title = useRef();
    const desc = useRef();
    const time = useRef();
    const material = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div class="wrap">
            <h2>Update Course</h2>
            <form onSubmit={handleSubmit}>
                <div class="main--flex">
                    <div>
                        <label for="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" value={props.title} ref={title}></input>

                        <p>By {props.firstName} {props.lastName}</p>

                        <label for="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription" ref={desc}>{props.desc}</textarea>
                    </div>
                    <div>
                        <label for="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" value={props.time} ref={time}></input>

                        <label for="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" ref={material}>{props.material}</textarea>
                    </div>
                </div>
                <button class="button" type="submit" onClick={handleSubmit}>Update Course</button><button class="button button-secondary" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default UpdateCourseDesc;