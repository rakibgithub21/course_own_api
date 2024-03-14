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

    // button handler:
    const [courseCart,setCourseCart] = useState([])
    const addToShoopingCart = (course) => {
        const mathced = courseCart.find(cart => cart.course_id === course.course_id);
        
        if (mathced) {
            alert('you already select this')
        } else {
            const newCart = [...courseCart, course];
            setCourseCart(newCart)
        }
    }
    // console.log(courseCart);

    return (
        <div className="container mx-auto flex my-5 gap-5">
            <div className="w-2/3">
                {courses.map(course => <Course
                    key={course.course_id}
                    course={course}
                    addToShoopingCart={addToShoopingCart}
                ></Course>)}
            </div>
            <div className="w-1/3 bg-slate-200 p-2 rounded-lg h-[500px] sticky top-0 overflow-auto">
                <Money courseCart={courseCart}></Money>
                <Enroll courseCart={courseCart}></Enroll>
            </div>
        </div>
    );
};



export default Container;