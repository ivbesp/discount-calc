import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';
import Discount from './Discount';


export default class Cart extends React.Component {

    constructor(props){
        super(props);
        this.calcDiscounts=this.calcDiscounts.bind(this);
    }

    calcDiscounts(items){
        let discount = this.props.discount;
        let prices = items.map(function(item,i){
            return item.price;
        });

        let sum_price = prices.reduce(function(sum, current){
            return sum+current;
        }, 0);

        let piecePrice = sum_price/100;
        let pieceDiscount = this.props.discount/100;

        let max_price = Math.max.apply(null, prices);
        var temp_discount = 0;

        let discounts = prices.map(function(item,i){
            if (item != max_price){
                let propPrice = item/piecePrice;
                let discount = propPrice*pieceDiscount;
                temp_discount +=Math.round(discount);
                return Math.round(item-discount);
            } else {
                return item - (discount - temp_discount);
            }
        });
        return discounts;
    }

    render() {
        let {items} = this.props;

        items = items.sort(function(a,b){
            return a.price>b.price;
        });

        let discounts = this.calcDiscounts(items);

        items = items.map(function(item,i){
            return Object.assign({}, item, {dprice: discounts[i]});
        });

        let note_text = 'Скидка для каждой позиции рассчитывается пропорционально цене товара. Скидка всегда в рублях без копеек. Сумма скидок по каждому товару всегда точно равна общей суммы. При округлении остаток суммы применяется к самому дорогому товару в корзине.';

        let tablerows = items.map((item, i) =>{
                return (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.dprice}</td>
                    </tr>
                )
            }
        );


        return (
            <div className="b-cart">
                <div className="b-cart__left">
                    <h1>Корзина</h1>
                    <table className="b-cart__table">
                        <thead>
                            <tr>
                                <th>Продукт</th>
                                <th>Цена</th>
                                <th>Цена со скидкой</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tablerows}
                        </tbody>
                    </table>
                    <Discount currentDiscount={this.props.discount} setDiscount={this.props.setDiscount}/>
                </div>
                <div className="b-cart__right">
                    <Note text={note_text}/>
                </div>
            </div>

        )
    }


}

