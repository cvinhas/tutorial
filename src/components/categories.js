import { Component } from "react";


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            isLoading: false,
            isError: false,
        };
    }

    // Fetch the categories from MealDB
    async componentDidMount() {
        this.setState({ isLoading: true });

        // Simple fetch of data
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");

        // quando fazemos fetch, recebemos "response.ok" se o pedido tiver corrido bem
        if (response.ok) {
            // precisamos de conveter a resposta em json, o que demora tempo, por isso temos o await
            const categories = await response.json();
            // a resposta pode nao ter os resultados logo na raiz,
            // por isso podemos ter que verificar como esta construido
            console.log(`Response ${categories}`);
            // neste caso as categories vem agrupdadas dentro de um array de categorias
            // passamos o valos do array de categories para o state, podemos dizer que ja terminamos o loading
            this.setState({ categories: categories.categories, isLoading: false });
        } else {
            // em caso de erro, actualizamos o state de erro e terminamos o loading
            this.setState({ isError: true, isLoading: false });
        }

    }

    renderTableHeader = () => {
        const headers = Object.keys(this.state.categories[0]);
        return headers.map(attr => {
            return (
                <th key={attr}>
                    {attr.toUpperCase()}
                </th>
            );
        });
    };

    renderTableRows = () => {
        return this.state.categories.map(category => {
            return (
                <tr key={category.idCategory}>
                    <td>{category.idCategory}</td>
                    <td>{category.strCategory}</td>
                    <td>{category.strCategoryThumb}</td>
                    <td>{category.strCategoryDescription}</td>
                </tr>
            );
        });
    };

    render() {
        const { categories, isLoading, isError } = this.state;
        console.log(categories.length);

        if (isLoading) return <div>Loading...</div>;
        if (isError) return <div>Error...</div>;
        return categories.length > 0 ? (
            <table>
                <thead>
                    <tr>
                        {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        ) : (<div>No categories</div>);
    }
}

export default Categories;