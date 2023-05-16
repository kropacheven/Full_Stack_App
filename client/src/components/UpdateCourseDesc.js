import React from "react";

const UpdateCourseDesc = (props) => {
    return (
        <div class="wrap">
            <h2>Update Course</h2>
            <form>
                <div class="main--flex">
                    <div>
                        <label for="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" value={props.title}></input>

                        <p>By {props.firstName} {props.lastName}</p>

                        <label for="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription">{props.desc}</textarea>
                    </div>
                    <div>
                        <label for="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" value={props.time}></input>

                        <label for="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded">{props.material}</textarea>
                    </div>
                </div>
                <button class="button" type="submit">Update Course</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
            </form>
        </div>
    );
}

export default UpdateCourseDesc;