import { CiCircleRemove } from "react-icons/ci";
import PropTypes from 'prop-types';

const Cart = ({ cart, deleteButton }) => {
    console.log(cart);
    return (
        <div className="flex justify-between items-center p-5  rounded-lg my-5 border-2 border-b-green-500 border-x-purple-400 shadow-xl border-l-cyan-400 border-t-red-300">
            <h3 className="text-xl  font-semibold">{cart.course_name}</h3>
            <button onClick={() => deleteButton(cart.course_id)} className="text-lg bg-red-600 p-3 rounded-full"><CiCircleRemove /></button>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.object,

};

export default Cart;