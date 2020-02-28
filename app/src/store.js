import{createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";


const initialState = {};
const middleWare = {thunk};
const reactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
let store;

if(window.navigator.userAgent.includes("Chrome") && reactReduxDevTools){
    store = createStore(
        rootReducer, 
        initialState, 
        compose(
            applyMiddleware(...middleWare),
            reactReduxDevTools
        )
    );
}
export default store;

