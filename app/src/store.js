import{createStore, applyMiddlewire, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from "./reducers";


const initialState = {};
const middleWare = {thunk};
const reactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
let store;

if(window.navigator.userAgent.includes("Chrome") && reactReduxDevTools){
    store = createStore(
        rootReducer, 
        initialState, 
        compose(
            applyMiddlewire(...middleWare),
            reactReduxDevTools
        )
    );
}

