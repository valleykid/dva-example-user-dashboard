import { routerRedux } from 'dva/router';

export function deleteHandler() {
  const { record: { id } } = this.props;
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

export function editHandler(id, values) {
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

export function showModelHandler(e) {
  if (e) e.stopPropagation();
  this.setState({
    visible: true,
  });
}

export function hideModelHandler() {
  this.setState({
    visible: false,
  });
}

export function okHandler() {
  const { onOk, record } = this.props;
  this.props.form.validateFields((err, values) => {
    if (!err) {
      if (record.id) {
        onOk(record.id, values);
      } else {
        onOk(values);
      }
      this.hideModelHandler();
    }
  });
}
