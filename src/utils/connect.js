import React from 'react';

// const connect = (...storeList) => {
//   return (ComponentView) => (props) => {
//     const list = [...storeList, ComponentView].reverse();
//     let el = null;
//     list.forEach((Item) => {
//       el = <Item {...props}>{el}</Item>;
//     });
//     return el;
//   };
// }
const connect = (Store) => {
  const StoreCom = Store;
  return (ComponentView) => {
    return (props) => <StoreCom><ComponentView {...props} /></StoreCom>
  }
}

export default connect;