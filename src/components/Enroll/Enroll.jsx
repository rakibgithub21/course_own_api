import PropTypes from 'prop-types';
import Cart from "../../Cart/Cart";

const Enroll = ({ courseCart,deleteButton }) => {
    return (
        <div>
            
            {
                courseCart.map((cart, index) => <Cart
                    cart={cart}
                    key={index}
                    index={index}
                        deleteButton={deleteButton}
                        
                    ></Cart>)
                }
              
        </div>
    );
};
Enroll.propTypes = {
    courseCart: PropTypes.array,
    deleteButton: PropTypes.func,
    
};

export default Enroll;