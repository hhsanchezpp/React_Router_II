import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Pokemon_Provider } from "./context/Pokemoncontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Pokemon_Provider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
    </Pokemon_Provider>
	</React.StrictMode>
);