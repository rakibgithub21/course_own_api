import { CiCircleRemove } from "react-icons/ci";

const Enroll = () => {
    return (
        <div className="flex justify-between mt-5 shadow-md p-5 rounded-3xl bg-stone-100 border border-green-400 items-center">
            <p className="text-2xl font-medium">Course name</p>
            <div className="flex gap-2 items-center">
                <p className="font-medium text-lg">Ratings</p>
                <button className="text-lg bg-red-600 p-3 rounded-full"><CiCircleRemove /></button>
            </div>
        </div>
    );
};

export default Enroll;