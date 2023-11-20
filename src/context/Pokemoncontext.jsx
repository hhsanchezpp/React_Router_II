import { createContext, useEffect, useState } from "react";
import PropsTypes from "prop-types"

export const Pokemoncontext = createContext();

const Apipokemon =  "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=500"
export const Pokemon_Provider = ({children}) => {
    const [pokemones, setPokemones] = useState([])
    const [pokemon_elejido, setPokemon_elejido] = useState({})
    const llamando_a_la_api = async () =>   {
                                                const resuLtado = await fetch(Apipokemon)
                                                const  informAcion = await resuLtado.json()
                                                setPokemones(informAcion.results)
                                            }
    useEffect(()=>{
        llamando_a_la_api()
    },[])

    const informAcion = { pokemones, pokemon_elejido, setPokemon_elejido, }
    return(
                <Pokemoncontext.Provider value={informAcion}>
                            {children}
                </Pokemoncontext.Provider>
    )
}
Pokemon_Provider.propTypes = { children: PropsTypes.object.isRequired
}