import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Footer = () =>{
    return(
        <footer className="footer">
            <div className='footer-container'>
                <div className='icons-footer'>
                    <FontAwesomeIcon icon={faMap} className='icon-red'/>
                    <FontAwesomeIcon icon={faFacebook} className='icon-red'/>
                    <FontAwesomeIcon icon={faTwitter} className='icon-red'/>
                </div>
                <h3>Todos los derechos reservados</h3>
                <p>
                    Sitio Web oficial de la Doctora Ana 
                </p>
            </div>
        </footer>
    )
}

export default Footer;