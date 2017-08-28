import React from 'react';
import { connect } from 'dva';
import { create } from 'react-magic-component';
import styles from './Users.css';
import cstyles from '../components/Users/Users.css';
import { showModelHandler, okHandler, hideModelHandler, pageChangeHandler, editHandler, createHandler, deleteHandler } from '../models/users.event.js';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';

create('UserEditModal', {
  events: {
    'onClick span Button button, span span a': 'showModelHandler',
  },
  props: {
    'onOk Modal': 'okHandler',
    'onCancel Modal': 'hideModelHandler',
  },
  showModelHandler,
  okHandler,
  hideModelHandler,
});

create('Users', {
  props: {
    'onChange div Pagination': 'pageChangeHandler',
    [`onOk .${cstyles.create} UserEditModal`]: 'createHandler',
    [`onOk .${cstyles.operation} UserEditModal`]: 'editHandler',
    [`onConfirm .${cstyles.operation} Popconfirm`]: 'deleteHandler',
  },
  connect: connect((state) => {
    const { list, total, page } = state.users;
    return {
      loading: state.loading.models.users,
      list,
      total,
      page,
    };
  }),
  pageChangeHandler,
  editHandler,
  createHandler,
  deleteHandler,
});

function Users({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <UsersComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(Users);
