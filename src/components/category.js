import { Component } from "react";

class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			idCategoria: null,
			descricaoCategoria: "",
			designacaoCategoria: "",
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
			<div>
				Category, it just works!
				<form onSubmit="handleUpdateCategory">
					<div>
						<label>
							Id da Categoria
							{this.state.idCategoria}
						</label>
					</div>
					<div>
						<label>
							<input type="text" value={this.state.designacaoCategoria} onChange={this.handleChangeDesignacao} />
						</label>
					</div>
					<div>
						<label>
							<input type="text" value={this.state.descricaoCategoria} onChange={this.handleChangeDescricao} />
						</label>
					</div>
					<Button variant="primary" type="submit" className="submit-btn">
						Submit
					</Button>
				</form>
			</div>
		);
	}
}

export default Category;