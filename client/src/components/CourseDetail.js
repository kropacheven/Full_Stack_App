import React from "react";
import { NavLink, useParams } from "react-router-dom";

const CourseDetail = (props) => {
    let {id} = useParams();
    let courseDetail = props.data[id-1];
    return (
        <main>
            <div className="actions--bar">
            {console.log(courseDetail)}
                <div className="wrap">
                    <NavLink className="button" to="update">Update Course</NavLink>
                    <NavLink className="button" to="/">Delete Course</NavLink>
                    <NavLink className="button button-secondary" to="/">Return to List</NavLink>
                </div>
            </div>

            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">Build a Basic Bookcase</h4>
                            <p>By Joe Smith</p>

                            <p>High-end furniture projects are great to dream about. But unless you have a well-equipped shop and some serious woodworking experience to draw on, it can be difficult to turn the dream into a reality.</p>

        
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>14 hours</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                <li>1/2 x 3/4 inch parting strip</li>
                                <li>1 x 2 common pine</li>
                                <li>1 x 4 common pine</li>
                                <li>1 x 10 common pine</li>
                                <li>1/4 inch thick lauan plywood</li>
                                <li>Finishing Nails</li>
                                <li>Sandpaper</li>
                                <li>Wood Glue</li>
                                <li>Wood Filler</li>
                                <li>Minwax Oil Based Polyurethane</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default CourseDetail;