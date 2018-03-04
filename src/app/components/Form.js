import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';


export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state =
            {
                prodName: '',
                prodPrice: ''
            };
        this.handleProdNameChange= this.handleProdNameChange.bind(this);
        this.handleProdPriceChange= this.handleProdPriceChange.bind(this);
        this.handleClick= this.handleClick.bind(this);

    }

    handleProdNameChange(e){
        this.setState({prodName: e.target.value});
    }
    handleProdPriceChange(e){
        this.setState({prodPrice: e.target.value});
    }
    handleClick(e) {
        e.preventDefault();
        let name = this.state.prodName;
        let price = this.state.prodPrice;
        console.log('Добавлен товар '+name+" : "+price);
        this.props.addItem(name, price);
    }

    render() {
        let note_text = 'С помощью этой формы вы можете отправить товары в корзину';


        return (
            <div className="b-form">
                <div className="b-form__left">
                    <h1>Добавить продукт</h1>
                    <table className="b-form__table b-table">
                        <thead>
                            <tr>
                                <th className="b-table__product">Продукт</th>
                                <th className="b-table__price">Цена</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input className="b-table__input-product"
                                           type="text"
                                           value={this.state.ProdName}
                                           onChange={this.handleProdNameChange}
                                    />
                                </td>
                                <td>
                                    <input className="b-table__input-price"
                                           type="text"
                                           value={this.state.ProdPrice}
                                           onChange={this.handleProdPriceChange}
                                    />
                                </td>
                                <td>
                                    <a className="b-btn" onClick={this.handleClick} href="#">Добавить</a>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className="b-form__right">
                    <Note text={note_text}/>
                </div>
            </div>

        )
    }


}
