import PropTypes from 'prop-types';
import {FriendListItem} from "components/FriendList/FriendListItem/FriendListItem";
import css from "./FriendList.module.css";


export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline}
                />
        ))}
        </ul>
    );
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }))    
};