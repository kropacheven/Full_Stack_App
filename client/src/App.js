// App tools:
import React, { useEffect, useState }  from 'react';
import axios from 'axios';
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


function App() {
  const [courses, setCourses] = useState( [] );

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => {
        // handle success
        setCourses(response.data);
      })
      .catch( error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      })
  }, [ ]);

  return (
    <div id="root">
        <Header />
        <Routes>
          <Route path="/" element={<Courses data={courses}/>} />
          <Route path="courses/course" element={<CourseDetail />} /> 
          <Route path="courses/course/update" element={<UpdateCourse />} /> 
          <Route path="courses/create" element={<CreateCourse />} />
          <Route path="signin" element={<UserSignIn />} />
          <Route path="signup" element={<UserSignUp />} />
          <Route path="signout" element={<UserSignOut />} />
        </Routes>
    </div>
  );
}

export default App;
