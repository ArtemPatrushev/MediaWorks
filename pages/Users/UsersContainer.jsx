import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { getUsersThunkCreator } from '../../redux/usersReducer';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator();
  };

  render() {
    return (
      <>
        {this.props.isFetching
          ? <Preloader />
          : null}
        <Users users={this.props.users} />
      </>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching
  };
};

export default compose(
  connect(mapStateToProps, { getUsersThunkCreator }),
)(UsersContainer);
