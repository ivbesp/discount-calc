import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

import Form from './Form';
import Cart from './Cart';
import Hr from './Hr';
import Discount from "./Discount";




const mapStateToProps = (state) => ({
    cart: state.cart,
    discount: state.discount
});

const mapDispatchToProps = (dispatch) => ({
    addItem: bindActionCreators(actions.addItem, dispatch),
    setDiscount: bindActionCreators(actions.setDiscount, dispatch)
});





class Wrapper extends React.Component {
    constructor(props){
        super(props);

        this.addItem = this.addItem.bind(this);
        this.setDiscount = this.setDiscount.bind(this);
    }

    //Добавление товара
    addItem(name, price) {
        this.props.addItem(name, price);
    }

    //установить текущую скидку
    setDiscount(discount) {
        console.log('discount:'+ discount)
        this.props.setDiscount(discount)
    }

    render() {
        return(
                <div>
                    <Form addItem={this.addItem}/>
                    <Hr/>
                    <Cart items={this.props.cart} discount={this.props.discount} setDiscount={this.setDiscount}/>
                </div>
            )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);