import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from '../middlewares/promisemw'
import flowers from '../reducers'
 
export default () => {
    return createStore(flowers, applyMiddleware(promiseMiddleware));
};