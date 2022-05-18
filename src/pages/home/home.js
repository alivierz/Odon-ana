import SlidePrincipal from "../../components/sliders/slider"
import './home.css'
const Home = () =>{
    return(
        <div className="home">
            <div className="title">
                <h1>Excelente servicio al cliente</h1>
                <p>Con gran calidad siempre</p>
            </div>
            <SlidePrincipal/>
        </div>
    )
}
export default Home