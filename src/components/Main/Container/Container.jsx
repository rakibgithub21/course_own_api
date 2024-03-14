import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Container = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('fakeApi.json')
            .then(res => res.json())
            .then(data => setCourses(data))
        
    }, [])

    return (
        <div className="container mx-auto flex my-5">
            <div className="w-2/3">
                {courses.map(course => <Course
                    key={course.course_id}
                    course={course}
                ></Course>)}
            </div>
            <div className="w-1/3">

            </div>
        </div>
    );
};

export default Container;