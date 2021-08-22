class TestService {

    async getTestItems() {
        const headersList = {
            "Accept": "*/*",
        };

        const options = {
            method: "GET",
            headers: headersList
        };

        try {
            const response = await fetch("https://6122525cd980b40017e0921f.mockapi.io/api/v1/item", options);
            const res = await response.json();
            // console.log("res", res);
            return res;
        } catch (error) {
            console.error("error getting full list", error);
        }
    }

    async getTestItem(id) {
        const headersList = {
            "Accept": "*/*",
        };

        const options = {
            method: "GET",
            headers: headersList
        };

        try {
            const response = await fetch(`https://6122525cd980b40017e0921f.mockapi.io/api/v1/item/${id}`, options);
            const res = await response.json();
            // console.log("res", res);
            return res;
        } catch (error) {
            console.error("error item", error);
        }
    }

    async updateTestItem(item) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "descricao": item.descricao,
            "designacao": item.designacao
        });

        var options = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`https://6122525cd980b40017e0921f.mockapi.io/api/v1/item/${item.id}`, options);
            console.log('response', response);
            const res = await response.json();
            return res;
        } catch (error) {
            console.error('error updating', error);
        }

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //     "descricao": item.descricao,
        //     "designacao": item.designacao
        // });

        // var requestOptions = {
        //     method: 'PUT',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // fetch(`https://6122525cd980b40017e0921f.mockapi.io/api/v1/item/${item.id}`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

    }
}
export default new TestService();


// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "descricao": "cenas",
//   "designacao": "coisas"
// });

// var requestOptions = {
//   method: 'PUT',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://6122525cd980b40017e0921f.mockapi.io/api/v1/item/1", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));