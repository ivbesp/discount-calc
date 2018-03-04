import React from 'react';

/*
* Главный компонент
* */

const App = (props) => {
    return (
        <div className='content'>
            {/* Вывод дочерних компонентов */}
            {props.children}

        </div>
    )
};

export default App;

