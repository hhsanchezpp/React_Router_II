import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
//
import { Pokemoncontext } from "../../context/Pokemoncontext";
import "./PokemonesPage.css";

const PokemonesPage = () => {
	const { pokemones, pokemon_elejido, setPokemon_elejido } = useContext(Pokemoncontext);
	const muestra_detalle = useNavigate();
	const detalle_del_poke = () => { muestra_detalle(`/pokemones/${pokemon_elejido}`); };

	return (
		<div className="container d-flex flex-column align-items-center">
			<h1 className="my-5">Elije un Pokemon</h1>
			<Form.Select className="w-90"  id="form_select" onChange={(e) => setPokemon_elejido(e.target.value)} value={pokemon_elejido} size="lg" aria-label="">
					<option 
							disabled value="">...Los Pokemones...
					</option>
							{pokemones.map((pokemon) => (
															<option key={pokemon.name} value={pokemon.name}>
																{pokemon.name}
															</option>
														))}
			</Form.Select>
            <Button className="w-100 mt-5" id="btn_caracteristicas" variant="primary" onClick={detalle_del_poke}>
				Detalles
			</Button>
		</div>
	);
};
export default PokemonesPage;