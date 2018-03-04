import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

//Reducers
import * as reducers from './reducers';

//Store
const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Главный компонент
import App from './components/App';

//Дочерние компоненты
import Wrapper from './components/Wrapper';


ReactDOM.render(
    <Provider store={store}>
        <App>
            <Wrapper/>
        </App>
    </Provider>,
    document.getElementById('root')
);




