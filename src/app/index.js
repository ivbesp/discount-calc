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
import Categories from './components/Categories';


ReactDOM.render(
    <Provider store={store}>
        <App>
            <Categories/>
        </App>
    </Provider>,
    document.getElementById('root')
);




