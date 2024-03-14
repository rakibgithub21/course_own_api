import PropTypes from 'prop-types';
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineEventSeat } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";


const Course = ({ course }) => {
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
                        <h3 className='text-2xl font-bold '>{instructor.name}</h3>
                        <p className='font-medium'>{instructor.profession}</p>
                    </div>
                </div>
                <div className='flex gap-2 text-2xl font-medium items-center'>
                    <h3>{duration}Month</h3>
                    <div>
                        <button className='bg-lime-500 p-2 rounded-full text-gray-700'><BsCartCheck /></button>
                    </div>
                </div>
            </div>

            <div className='space-y-1'>
                <h3 className='text-3xl font-bold '>{course_name}</h3>
                <h1 className='font-medium text-xl '>{description}</h1>
            </div>
            <div>
                <div className='flex gap-2 items-center'>
                    <p className='text-pink-700'><GrSchedule /></p>
                    <h3>{schedule}</h3>
                </div>
                <div className='flex gap-3'>
                    <p>{location.name}</p>
                    <p>Room: {location.room_number}</p>
                </div>
            </div>

            <div className='flex justify-between mt-3'>
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
};
export default Course;