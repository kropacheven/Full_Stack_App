// App tools:
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';


//App components:
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import NotFound from './components/NotFound';
import UnhandledError from './components/UnhandledError';
import Forbidden from './components/Forbidden';
import PrivateRoute from './components/PrivateRoute';


function App() {
  let navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  //console.log(courses);
  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => {
        // handle success
        setCourses(response.data);
      })
      .catch(error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      })
  }, [navigate]);

  return (
    <div id="root">
      <Header />
      <Routes>
        <Route path="/" element={<Courses data={courses} />} />
        <Route path="courses/:id" element={<CourseDetail data={courses} />} />
        <Route path="signin" element={<UserSignIn />} />
        <Route path="signup" element={<UserSignUp />} />
        <Route path="signout" element={<UserSignOut />} />
        <Route element={<PrivateRoute />}>
          <Route path="courses/create" element={<CreateCourse />} />
          <Route path="courses/:id/update" element={<UpdateCourse data={courses} />} />
        </Route>
        <Route path="error" element={<UnhandledError />} />
        <Route path="forbidden" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
