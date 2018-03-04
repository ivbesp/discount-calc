import React from 'react';
import ReactDOM from 'react-dom';

export default class Note extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        let {text} = this.props; // переданный текст для заметки

        return (
            <div className="b-note">
                <p>{text}</p>
            </div>
        )
    }


}

