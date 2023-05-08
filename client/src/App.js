import React, { useEffect, useState }  from 'react';
import axios from 'axios';

import Header from './components/Header';
import Courses from './components/Courses';


function App() {
  const [courses, setCourses] = useState( [] );
  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => {
        // handle success
        console.log(response.data);
      })
      .catch( error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      })
  }, [ ]);
  return (
    <div id="root">
        <Header />
        <Courses />
    </div>
  );
}

export default App;
