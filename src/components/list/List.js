import React from "react";

class List extends React.Component {


	constructor() {

		super();

		this.state = {
			loading: false,
			currencies: [],
			error: null
		};

	}

	componentDidMount() {

		fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')

		    .then(response => {

		      return response.json().then(json => {

		        return response.ok ? json : Promise.reject(json);

		      });

		    })

		    .then((data) => {

		      console.log('Success', data);

		    })

		    .catch((error) => {

		      console.log('Error', error);

		    });

	}

	render() {

		if (this.state.loading) {

			return <div>Loading...</div>

		}

		return(

			<div>Text</div>

		)

	}

}

export default List;