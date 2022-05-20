import './info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faTeeth, faBook, faLaugh} from '@fortawesome/free-solid-svg-icons'


const Informacion = () =>{
    return(
        <div className='biografia'>
            <div className='biografia-titulo'>
                <img src="https://i.imgur.com/GogvtOi.jpg" alt="" />
                <h3>Ana Rosa García Salinas</h3>
                <p>Cirujana dentista, Especialista en ortodoncia - Egresada de la UNAM</p>
            </div>
            <p className='description'>
            Dentista de confianza con 11 años de experiencia, especialista en Ortodoncia y Ortopedia, 
            enfocada en el análisis detallado de los problemas dentales y esqueletales del paciente, 
            mediante el estudio de los síntomas, radiografías, modelos, fotos e historia clínica, con la finalidad de 
            llevar a cabo el tratamiento adecuado. Experta en la utilización de herramientas y equipos dentales, incluyendo 
            el análisis de tomografías computarizadas. Capaz de tratar a los pacientes de manera eficaz y eficiente, orientándolos 
            acerca de los diferentes aspectos relacionados con el cuidado dental, desarrollando relaciones fuertes a nivel 
            personal y profesional, con mis colegas y pacientes, procurando siempre un clima agradable y de armonía
            </p>
            <div className='articulos'>
                <h2>Articulos destacados</h2>
                <div className='articulos-destacados'>
                    <div>
                        <a href="https://repositorio.unam.mx/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGraduationCap}/></a>
                        <h5>Tesis de Licenciatura</h5>
                    </div>
                    <div>
                        <a href="https://www.imbiomed.com.mx/articulo.php?id=66425" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTeeth}/></a>
                        <h5>Ulcera Traumatica(TUGSE)</h5>
                    </div>
                    <div>
                        <a href="https://www.jomos.org/articles/mbcb/abs/2011/03/mbcb110019/mbcb110019.html" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faBook}/></a>
                        <h5>Articulo Publicado en Jomos</h5>
                    </div>
                    <div>
                        <a href="https://www.medigraphic.com/cgi-bin/new/resumen.cgi?IDARTICULO=102026" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLaugh}/></a>
                        <h5>Paciente con secuela de labio y paladar</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Informacion