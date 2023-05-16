import React from "react";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <main>
        <div class="wrap">
            <h2>Create Course</h2>
            <div class="validation--errors">
                <h3>Validation Errors</h3>
                <ul>
                    <li>Please provide a value for "Title"</li>
                    <li>Please provide a value for "Description"</li>
                </ul>
            </div>
            <form>
                <div class="main--flex">
                    <div>
                        <label for="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" value=""></input>

                        <p>By Joe Smith</p>

                        <label for="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription"></textarea>
                    </div>
                    <div>
                        <label for="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" value=""></input>

                        <label for="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
                    </div>
                </div>
                <button class="button" type="submit" onClick={handleSubmit}>Create Course</button><button class="button button-secondary" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    </main>
    );
}


export default CreateCourse;