// App tools:
import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

//App components:
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CourseCreate from './components/CourseCreate';
import CourseUpdate from './components/CourseUpdate';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';


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
          <Route path="courses/course/update" element={<CourseUpdate />} /> 
          <Route path="courses/create" element={<CourseCreate />} />
          <Route path="signin" element={<UserSignIn />} />
          <Route path="signup" element={<UserSignUp />} />
        </Routes>
    </div>
  );
}

export default App;
