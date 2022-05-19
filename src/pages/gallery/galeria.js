import Video from "../../components/gallerycomponents/videos/videos"
import Clientes from "../../components/gallerycomponents/clientes/clientes"
import Tiempo from "../../components/gallerycomponents/tiempo/tiempo"
import './galeria.css'

const Galeria = () =>{
    return(
        <div className="galeria">
            <Video/>
            <Tiempo/>
            <Clientes/>
        </div>
    )
}
export default Galeria