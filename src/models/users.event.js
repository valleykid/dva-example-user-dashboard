import { routerRedux } from 'dva/router';

export function deleteHandler(e, { props }) {
  const { record: { id } } = props;
  this.props.dispatch({
    type: 'users/remove',
    payload: id,
  });
}

export function pageChangeHandler(page) {
  this.props.dispatch(routerRedux.push({
    pathname: '/users',
    query: { page },
  }));
}

export function editHandler(values, { props }) {
  const { record: { id } } = props;
  this.props.dispatch({
    type: 'users/patch',
    payload: { id, values },
  });
}

export function createHandler(values) {
  this.props.dispatch({
    type: 'users/create',
    payload: values,
  });
}
