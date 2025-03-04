import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  const List = friends.map(friend => {
    return (
      <li key={friend.id} className={css.friendlist__item}>
        <FriendListItem friend={friend} />
      </li>
    );
  });

  return <ul className={css.friendlist__container}>{List}</ul>;
}