import axios from 'axios';
import { useEffect } from 'react';
import { conectionHttps } from '../../http';

export default function Inicio() {
	useEffect(() => {
		console.log(conectionHttps);
		axios
			.get(`${conectionHttps}api/v2/restaurantes/`)
			.then((response) => console.log(response.data))
			.catch((error) => console.log(error));
	}, []);

	return <h3>ola mundo</h3>;
}
