import PropTypes from "prop-types";
import style from "./FriendList.module.scss";

export function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={style.item} key={id}>
          <span className={`${style.status} ${isOnline && style.isOnline}`}></span>
          <img className={style.avatar} src={avatar} alt={name} width="48" />
          <p className={style.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};