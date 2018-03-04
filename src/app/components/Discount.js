import React from 'react';
import ReactDOM from 'react-dom';
import {discount} from "../reducers";


export default class Discount extends React.Component {

    constructor(props){
        super(props);
        this.state=
            {
                discount: this.props.currentDiscount
            };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    handleChange(e){
        this.setState({discount: e.target.value});
    }

    handleClick(e){
        e.preventDefault();
        this.props.setDiscount(this.state.discount)
    }
    render() {

        return (

            <div className="b-discount">Применить скидку
                <input className="b-discount__value"
                       type="text"
                       value={this.state.discount}
                       onChange={this.handleChange}
                />
                 рублей
                <a className="b-btn" href="#" onClick={this.handleClick}>Применить</a>
            </div>

        )
    }


}
