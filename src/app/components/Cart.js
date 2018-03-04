import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';


export default class Cart extends React.Component {

    constructor(props){
        super(props);
        this.calcDiscountPrice=this.calcDiscountPrice.bind(this)
    }

    //рассчитать цену со скидкой для одного товара
    calcDiscountPrice(price){
        let sum_price = this.props.items.reduce(function(sum, current){
            return sum + current.price;
        }, 0);
        let proportion = this.props.discount/sum_price;
        let discount = price*proportion;
        let discount_price = price - discount;
        return discount_price;
    }

    render() {
        let {items} = this.props;
        let note_text = 'Скидка для каждой позиции рассчитывается пропорционально цене товара. Скидка всегда в рублях без копеек. Сумма скидок по каждому товару всегда точно равна общей суммы. При округлении остаток суммы применяется к самому дорогому товару в корзине.';
        let tablerows = items.map((item, i) =>{
            return (
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{this.calcDiscountPrice(item.price)}</td>
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

                </div>
                <div className="b-cart__right">
                    <Note text={note_text}/>
                </div>
            </div>

        )
    }


}

