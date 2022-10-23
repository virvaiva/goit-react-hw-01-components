import PropTypes from 'prop-types';
import css from "./TransactionHistoryItems.module.css";

const TransactionHistoryItems = ({ id, type, amount, currency }) => {
    return (
        <tbody className={css.table}>
            <tr key={id}>
                <td className={css.tableType}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        </tbody>
    );
}

TransactionHistoryItems.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};
export default TransactionHistoryItems;