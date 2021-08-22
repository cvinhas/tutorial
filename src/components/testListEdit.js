import { navigate } from "hookrouter";
import { Component } from "react";
import { Button } from "react-bootstrap";
import TestService from "../services/TestService";

class TestListEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemId: null,
            descricao: "",
            designacao: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeItemDescricao = this.handleChangeItemDescricao.bind(this);
        this.handleChangeItemDesignacao = this.handleChangeItemDesignacao.bind(this);
    };

    async handleSubmit(event) {
        // this.props.listHandleCallback(this.state.itemName);
        // this.setState({ item: {} });
        const itemUpdated = {
            id: this.state.itemId,
            descricao: this.state.descricao,
            designacao: this.state.designacao

        };
        // console.log('item', this.state);
        event.preventDefault();
        await TestService.updateTestItem(itemUpdated);
        navigate(`/testList`);
    }

    handleChangeItemDescricao(event) {
        // console.log(event.target.value);
        this.setState({ descricao: event.target.value });
    }

    handleChangeItemDesignacao(event) {
        this.setState({ designacao: event.target.value });
    }

    async componentDidMount() {
        // console.log(this.props.itemId);
        const item = await TestService.getTestItem(this.props.itemId);
        this.setState({ itemId: item.id, descricao: item.descricao, designacao: item.designacao });
        // console.log('item', this.state.item);
    }

    render() {
        return (
            <div>
                Test List Edit, it works!
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>ID: </label>
                        {this.state.itemId}
                    </div>
                    <div>
                        <label>
                            Descricao
                            <input type="text" value={this.state.descricao} onChange={this.handleChangeItemDescricao} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Designacao
                            <input type="text" value={this.state.designacao} onChange={this.handleChangeItemDesignacao} />
                        </label>
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }

}

export default TestListEdit;