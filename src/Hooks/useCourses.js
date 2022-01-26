import { useEffect } from "react";
import { useState } from "react"

const useCourses = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://frozen-forest-00333.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    },[]);
    return[courses];
};

export default useCourses;