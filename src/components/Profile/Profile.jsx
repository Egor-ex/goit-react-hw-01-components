import PropTypes from "prop-types";

import style from "./Profile.module.scss";

export function Profile({ avatar, name, tag, location, stats }) {
    return (
        <div className={style.profile}>
            <div className={style.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={style.avatar}
                />
                <p className={style.name}>{name}</p>
                <p className={style.tag}>@{tag}</p>
                <p className={style.location}>{location}</p>
            </div>

            <ul className={style.stats}>
                <li className={style.statItem}>
                    <span className={style.label}>Followers</span>
                    <span className={style.quantity}>{stats.followers}</span>
                </li>
                <li className={style.statItem}>
                    <span className={style.label}>Views</span>
                    <span className={style.quantity}>{stats.views}</span>
                </li>
                <li className={style.statItem}>
                    <span className={style.label}>Likes</span>
                    <span className={style.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

Profile.defaultProps = {
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  name: "Username",
  stats: { followers: 0, views: 0, likes: 0 },
};