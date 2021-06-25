import styles from '../../../styles/UserItem.module.scss';

const UserItem = (props) => {
  return (
    <div className={styles.block}>
      <p className={styles.block__header}>
        {props.user.name}
      </p>
      <p className={styles.block__subHeader}>
        {props.user.address.city}
      </p>
      <p className={styles.block__link}>
        {props.user.email}
      </p>
    </div>
  )
};

export default UserItem;
