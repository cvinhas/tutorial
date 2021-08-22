import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CategoryAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designacaoCategoria: "",
            descricaoCategoria: "",
        };
        this.handleChangeDesignacao = this.handleChangeDesignacao.bind(this);
        this.handleChangeDescricao = this.handleChangeDescricao.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeDesignacao(event) {
        console.log(event.target.value);
        this.setState({ designacaoCategoria: event.target.value });
    }

    handleChangeDescricao(event) {
        console.log(event.target.value);
        this.setState({ descricaoCategoria: event.target.value });
    }

    handleSubmit(event) {
        console.log(`Form was submitted ${event}`);
        event.preventDefault();

        const formData = {
            designacaoCategoria: this.state.designacaoCategoria,
            descricaoCategoria: this.state.descricaoCategoria,
        };

        console.log(`Form data: ${formData}`);
    }

    render() {
        return (
            <div className="myform">
                Category Form
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label>
                            Designacao da categoria
                            <input type="text" value={this.state.designacaoCategoria} onChange={this.handleChangeDesignacao} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label>
                            Descricao da categoria
                            <input type="text" value={this.state.descricaoCategoria} onChange={this.handleChangeDescricao} />
                        </label>
                    </div>
                    <Button variant="primary" type="submit" className="submit-btn">
                        Submit
                    </Button>
                </form>
            </div>);
    }
}
export default CategoryAdd;