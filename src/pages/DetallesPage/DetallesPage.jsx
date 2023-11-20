import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//bootstrap
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//---
import "./DetallesPage.css";

const DetallesPage = () => {
	const [pokemon, setPokemon] = useState({});
 	const [cargando, setCargando] = useState(true);
    const { name } = useParams();

	const link_api = `https://pokeapi.co/api/v2/pokemon/${name}`;

	const getPokemon = async () => {
										const resuLtado = await fetch(link_api);
										const informAcion = await resuLtado.json();
		if (informAcion) {
							setPokemon(informAcion);
							setCargando(false);
		} };
    
	useEffect(() => {
        				getPokemon();
					}, []);
    if (cargando) { return <div className="text-center mt-5">Cargando...</div>; }
	return (
		<div className="container d-flex flex-column align-items-center ">
			<h1 className="my-5" >Caracteristicas</h1>
			<Card>
				<Card.Title id="nombre_pokemon" className="text-center my-4">
					{pokemon.name?.toUpperCase()}
				</Card.Title>
				<Card.Img style={{ height: "30rem" }} 
							src={pokemon.sprites?.other?.dream_world?.front_default} 
				/>
				<br></br>
				<ListGroup >
					<ListGroup.Item>Type: {pokemon.types[0].type.name}</ListGroup.Item>
					<ListGroup.Item>Attack: {pokemon.stats[1].base_stat} </ListGroup.Item>
					<ListGroup.Item>Defense: {pokemon.stats[2].base_stat} </ListGroup.Item>
					<ListGroup.Item>Speed: {pokemon.stats[5].base_stat} </ListGroup.Item>
				</ListGroup>
			</Card>
		</div>
	);
};
export default DetallesPage;