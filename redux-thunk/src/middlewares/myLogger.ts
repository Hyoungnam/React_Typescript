import {StoreEnhancerStoreCreator, ActionCreator, Action, Store} from "redux";
// StoreEnhancer<{ dispatch: Ext1 & Ext2 }>
// const myLogger = <T extends Function>(store: T) => (next:T) => (action:T) => {
// const myLogger = <T extends (...args: any[]) => any>(store: T) => (next:T) => (action:T) => {
const myLogger = (store: Store) => (next:StoreEnhancerStoreCreator) => (action:ActionCreator<Action>) => {
  console.log('action: ', action);
  console.log('\tPrev: ', store.getState());
  const result = next(action);
  console.log('\tNext: ', store.getState());
  //return Promis.resolve()
  return result;
}

export default myLogger

// const middleware = store => next => action => {
// 	//하고 싶은 작업....
// }

// -->
// function middleware(store) {
// 	return function(next) {
// 		return function (action) {
// 				//하고 싶은 작업...
// 		}
// 	}
// }

//thunk middleware
// const thunk = store => next => action => 
//   typeof action === 'function'
//     ? action(store.dispatch, store.getState)
//     : next(action)
// const myThunk = () => (dispatch, getState) => {
//   dispatch({type: 'HELLO'});
//   dispatch({type: 'BYE'});
// }
// dispatchEvent(myThunk())