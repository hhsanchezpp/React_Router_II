import "./HomePage.css"
import pikachu from "../../assets/imgs/pikachu.png"
const HomePage = () => {
    return (
        <div className="home_page_container" >
                <h1>Pokemon</h1>
                            <img src={pikachu} alt="pikachu" />
        </div>
    )
}
export default HomePage