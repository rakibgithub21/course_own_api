import { useEffect, useState } from "react";
import Course from "../Course/Course";
import Money from "../../Money/Money";
import Enroll from "../../Enroll/Enroll";
import { addToLS, getStoredCart, removeFromLS } from "../../../utilities/utilities";


const Container = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('fakeApi.json')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])


    useEffect(() => {
        if (courses.length) {
            const storedCart = getStoredCart()
            let savedArray = []
            for (const id of storedCart) {
                const search = courses.find(course => course.course_id === id);
                savedArray.push(search)
                // console.log(search);
            }
            setCourseCart(savedArray)
        }
    }, [courses])

    // button handler:
    const [courseCart, setCourseCart] = useState([])
    const addToShoopingCart = (course) => {
        const mathced = courseCart.find(cart => cart.course_id === course.course_id);

        if (mathced) {
            alert('you already select this')
        } else {
            const newCart = [...courseCart, course];
            setCourseCart(newCart);
            addToLS(course.course_id)

        }
    }
    // console.log(courseCart);

    const deleteButton = id => {
        // console.log(id);
        const remaining = courseCart.filter(cart => cart.course_id !== id);
        setCourseCart(remaining);
        removeFromLS(id)

    }

    return (
        <div className="container mx-auto flex flex-col-reverse md:flex-row my-5 gap-5">
            <div className="md:w-2/3">
                {courses.map(course => <Course
                    key={course.course_id}
                    course={course}
                    addToShoopingCart={addToShoopingCart}
                ></Course>)}
            </div>
            <div className="md:w-1/3 bg-slate-200 p-2 rounded-lg h-64  md:h-[500px] md:sticky top-0 overflow-auto">
                <Money courseCart={courseCart}></Money>
                <Enroll courseCart={courseCart} deleteButton={deleteButton}></Enroll>
            </div>
        </div>
    );
};



export default Container;