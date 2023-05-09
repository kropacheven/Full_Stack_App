// App tools:
import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

//App components:
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CourseCreate from './components/CourseCreate';


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
          <Route path="courses/create" element={<CourseCreate />} />
        </Routes>
    </div>
  );
}

export default App;
