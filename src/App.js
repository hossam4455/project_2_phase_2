import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Home_page/navbar";
import Midel from "./Home_page/midel";
import Courses from "./Home_page/courses";
import Categories from './Home_page/categories'
import CoursePage from './course_page/CoursePage'
import DarkFooter from "./DarkFooter";
import Spinner from "./spinner";
export default function All() {
  const [data, setdata] = useState([]); 
  const [word,setword]=useState("")
  
  useEffect(() => {
      axios
          .get(`https://api.npoint.io/bd8d7dda3c4a148ee5a8`)
          .then((res) => {
              setdata(res.data);
          })
          .catch((err) => {
          })
  }, []);
 console.log("//");
 console.log(word);
 console.log("//");
  if(data.length==0)
  {
    return(
   
     <Spinner/>
   
    )
  }
  else{
    return (
    <div>
    <Router>
      <Navbar search={((word) => setword(word))}/>
      <Routes>
          <Route path="/" element={<> <Midel  /><Courses info={data } need={word}/><Categories />  </>} />
        
          {
            data.map((course) => <Route path={'/' + course.id}
              element={<CoursePage info={course} />} />)
          }
        <Route path="*" element={<> <Midel  /><Courses info={data}/><Categories />  </>} />
      </Routes>
      <DarkFooter/>
    </Router>
    </div>
  )
  }
  
}
