import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => ({
    categories: state.categories,
    category_id: Date.now().toString()
});

const mapDispatchToProps = (dispatch) => ({
    addCategory: bindActionCreators(actions.addCategory, dispatch),
});





class Categories extends React.Component {

    //создание категории
    addCategory() {
        let cat_id = this.props.category_id+1;
        let cat_name = ReactDOM.findDOMNode(this.refs.category_add).value;
        let cat_enc = ReactDOM.findDOMNode(this.refs.category_enc).value;
        let cat_temp = ReactDOM.findDOMNode(this.refs.category_temp).checked;
        this.props.addCategory(cat_id, cat_name, cat_enc, cat_temp);
    }

    //отрисовка компонента
    render() {
        let {categories} = this.props; // destruction нужных свойств из объекта this.props
        let activeCategoriesTemplate = categories.map((item, i) =>{
                if (item.temp){
                    return (
                        <div key={i}>
                            <span>
                                <b>{item.category_name}</b> — {item.category_enc}
                            </span>
                        </div>

                    )
                }
            }
        );
        let inactiveCategoriesTemplate = categories.map((item, i) =>{
                if (!item.temp){
                    return (
                        <div key={i} className="b-category">
                            <span>
                                <b>{item.category_name}</b> — {item.category_enc}
                            </span>
                        </div>
                    )

                }
            }
        );

        return (
            <div>
                <h1>КАТЕГОРИИ</h1>

                <h2>Активные:</h2>
                    <div>
                        {activeCategoriesTemplate}
                    </div>

                <h2>Неактивные:</h2>
                    <div>
                        {inactiveCategoriesTemplate}
                    </div>

                <h2>Добавление:</h2>
                    <p>
                        <label>Название категории<br/>
                            <input ref="category_add" size="20" type="text" defaultValue="" />
                        </label>
                    </p>
                    <p>
                        <label>якорная ссылка<br/>
                            <input ref="category_enc" type="text" defaultValue=""/>
                        </label>
                    </p>
                    <div>
                        <label>
                        <input ref="category_temp" type="checkbox" defaultChecked={true} />Активная
                        </label>
                    </div>
                    <p>
                        <input ref="category_submit" onClick={this.addCategory.bind(this)} type= "submit" value="Добавить" />
                    </p>
            </div>

        )
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);