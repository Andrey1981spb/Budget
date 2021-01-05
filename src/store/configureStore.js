import {createStore} from 'redux';
import rootReducer from '../reducers/root';
import { devToolsEnhancer } from 'redux-devtools-extension';
import initialState from '../constants/initialState';

let store;
export default function configureStore() {
    if (store) {
        return store;
    }
    var state = initialState;
    store = createStore(rootReducer, state, devToolsEnhancer());
    return store;
}