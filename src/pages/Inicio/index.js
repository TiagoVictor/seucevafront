import axios from 'axios';
import { useEffect, useState } from 'react';
import { conectionHttp } from '../../http';
import style from './Inicio.module.css';

export default function Inicio() {
	const [data, setData] = useState([]);
	const [pratos, setPratos] = useState([]);
	useEffect(() => {
		axios
			.get(`${conectionHttp}api/v2/restaurantes/`)
			.then((response) => {
				setData(response.data);
				console.log(response);
			})
			.catch((error) => console.log(error));

		axios
			.get(`${conectionHttp}api/v2/pratos/`)
			.then((response) => {
				setPratos(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className={style.container}>
			{data.map((restautante) => {
				return (
					<div key={restautante.id} className={style.restaurante}>
						<h3>{restautante.nome}</h3>
						{pratos.map((pratos) => {
							if (pratos.restaurante === restautante.id)
								return (
									<div className={style.pratos} key={pratos.id + pratos.nome}>
										<h4>
											{pratos.nome} - {pratos.tag}
										</h4>
										<p>{pratos.descricao}</p>
									</div>
								);
						})}
					</div>
				);
			})}
		</div>
	);
}
