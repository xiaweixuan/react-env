import React from 'react';

const connect = (...storeList) => {
  return (ComponentView) => (props) => {
    const list = [...storeList, ComponentView].reverse();
    let el = null;
    list.forEach((Item) => {
      el = <Item {...props}>{el}</Item>;
    });
    return el;
  };
}
export default connect;