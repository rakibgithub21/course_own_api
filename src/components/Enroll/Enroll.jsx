import PropTypes from 'prop-types';
import Cart from "../../Cart/Cart";

const Enroll = ({ courseCart }) => {
    console.log(courseCart);
    return (
        <div>
            
                {
                    courseCart.map((cart,id) => <Cart
                        cart={cart}
                        key={id}
                        
                    ></Cart>)
                }
              
        </div>
    );
};
Enroll.propTypes = {
    courseCart: PropTypes.array,
    
};

export default Enroll;