import clsx from "clsx";
import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

export default function FriendListItem({ friend }) {
  const classText = clsx(
    css.friendlist__item_text,
    friend.isOnline
      ? css.friendlist__item_isonline
      : css.friendlist__item_isoffline
  );
  return (
    <div className={css.friendlist__item_container}>
      <img src={friend.avatar} alt={friend.name} width="48" />
      <p className={css.friendlist__item_name}>{friend.name}</p>
      <p className={classText}>{friend.isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}