import { routerRedux } from 'dva/router';

export function deleteHandler(targetProps) {
  const { record: { id } } = targetProps;
  this.props.dispatch({
    type: 'users/remove',
    payload: id,
  });
}

export function pageChangeHandler(targetProps, page) {
  this.props.dispatch(routerRedux.push({
    pathname: '/users',
    query: { page },
  }));
}

export function editHandler(targetProps, values) {
  const { record: { id } } = targetProps;
  this.props.dispatch({
    type: 'users/patch',
    payload: { id, values },
  });
}

export function createHandler(targetProps, values) {
  this.props.dispatch({
    type: 'users/create',
    payload: values,
  });
}
