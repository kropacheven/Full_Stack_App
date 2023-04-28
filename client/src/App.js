import React, { useEffect, useState }  from 'react';
import axios from 'axios';


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
    <div>

    </div>
  );
}

export default App;
