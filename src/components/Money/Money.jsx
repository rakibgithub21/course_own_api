import PropTypes from 'prop-types';

const Money = ({ courseCart }) => {
    let total = 0;
    for (const cart of courseCart) {
        total = cart.price + total;
    }
    return (
        <div className="shadow-2xl p-4 rounded text-center border border-pink-500">
            <h3 className="text-2xl font-semibold">Total Money:{total}</h3>
        </div>
    );
};
Money.propTypes = {
    courseCart: PropTypes.array,


};

export default Money;