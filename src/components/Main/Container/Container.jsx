import { useEffect, useState } from "react";
import Course from "../Course/Course";
import Money from "../../Money/Money";
import Enroll from "../../Enroll/Enroll";

const Container = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('fakeApi.json')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])

    return (
        <div className="container mx-auto flex my-5 gap-5">
            <div className="w-2/3">
                {courses.map(course => <Course
                    key={course.course_id}
                    course={course}
                ></Course>)}
            </div>
            <div className="w-1/3 bg-slate-200 p-2 rounded-lg h-[500px] sticky top-0">
                <Money></Money>
                <Enroll></Enroll>
            </div>
        </div>
    );
};

export default Container;