import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MyRoutes from "./routes/MyRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<NavBar />
			<MyRoutes />
		</>
	);
}
export default App;