import styles from '../../styles/Users.module.scss';
import UserItem from './UserItem/UserItem';

const Users = (props) => {
  console.log(props);
  return (
    <div className={styles.UsersContent}>
      <p className={styles.UsersContent__header}>
        Пользователи
      </p>
      {props.users.map(u => <UserItem 
                              key={u.id}
                              user={u}
      />)}
    </div>
  )
};

export default Users;
