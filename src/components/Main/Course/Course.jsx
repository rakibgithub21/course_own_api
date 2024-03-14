import PropTypes from 'prop-types';
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineEventSeat } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";


const Course = ({ course, addToShoopingCart }) => {
    const { course_name,
        description,
        instructor,
        location,
        price,
        ratings,
        schedule,
        image: banner_img,
        total_enrollment,
        duration,
    } = course;
    let p;
    if (ratings > 4.7) {
        p = ' Excellent'
    } else {
        p = ' Average'
    }
    return (
        <div className="mb-10">
            <img className="w-full rounded-xl" src={banner_img} alt="" />

            <div className='flex justify-between my-5'>
                <div className='flex gap-3 items-center'>
                    <img className='w-14 h-14 object-cover rounded-full' src={instructor.image} alt="" />
                    <div>
                        <h3 className='lg:text-2xl md:text-xl lg:font-bold md:font-medium'>{instructor.name}</h3>
                        <p className='md:font-medium '>{instructor.profession}</p>
                    </div>
                </div>
                <div className='flex gap-2 lg:text-2xl md:text-xl md:font-medium items-center'>
                    <h3>{duration}Month</h3>
                    <div>
                        <button onClick={() => addToShoopingCart(course)} className='bg-lime-500 p-2 rounded-full text-gray-700'><BsCartCheck /></button>
                    </div>
                </div>
            </div>

            <div className='space-y-1'>
                <h3 className='lg:text-3xl md:text-2xl font-semibold lg:font-bold '>{course_name}</h3>
                <h1 className='md:font-medium text-xl  '>{description}</h1>
            </div>
            <div className='flex justify-between md:font-medium md:text-lg mt-3 md:mt-0 flex-col md:flex-row'>
                <div className='flex gap-2 items-center flex-col md:flex-row text-center md:text-start'>
                    <p className='text-pink-700'><GrSchedule /></p>
                    <h3>{schedule}</h3>
                </div>
                <div className='flex gap-3 justify-center md:justify-normal'>
                    <p>{location.name}</p>
                    <p>Room: {location.room_number}</p>
                </div>
            </div>

            <div className='flex justify-between mt-3 flex-col md:flex-row' >
                <div className='flex gap-5 font-medium text-lg'>
                    <p>Price: {price} ৳</p>
                    <p>Review :{p}</p>
                </div>
                <div className='text-xl flex gap-2 items-center text-green-500'>
                    <span className='text-2xl'><MdOutlineEventSeat /></span>
                    <span>Total Seat : {total_enrollment}</span>
                </div>
            </div>


        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object,
    addToShoopingCart: PropTypes.func,
};
export default Course;