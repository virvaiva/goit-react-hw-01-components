import PropTypes from 'prop-types';
import TransactionHistoryItems from "./TransactionHistoryItems/TransactionHistoryItems";
import css from "./TransactionHistory.module.css";
export const TransactionHistory = ({items}) => {
    return <table className={css.transactionHistory}>
    <thead className={css.transactionHistoryHeader}>
      <tr>
        <th>type</th>
        <th>amount</th>
        <th>currency</th>
      </tr>
    </thead>
    {items.map(({ id, type, amount, currency }) => (
                <TransactionHistoryItems
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                />
            ))}
  </table>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.exact({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
      }))   
    }