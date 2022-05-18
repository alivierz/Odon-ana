import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faArrowDown, faClock, faMapMarked, faMobile } from "@fortawesome/free-solid-svg-icons"
import './nav.css'
import { useState } from "react"

const Navbar = () =>{
    const [movil, setMovil] = useState('hidden')
    const [conditionmenu, setConditionMenu] = useState(true)

    const [personal, setPersonal] = useState('hidden-personal')
    const [conditionPersonal, setConditionPersonal] = useState(false)

    const showPersonal = () =>{
            if(conditionPersonal){
                setPersonal('hidden-personal')
                setConditionPersonal(false)
            }else{
                setPersonal('')
                setConditionPersonal(true)
            }
    } 
    const showMenu = () =>{
        if(conditionmenu){
            setMovil('')
            setConditionMenu(false)
        }else{
            setMovil('hidden')
            setConditionMenu(true)
        }
    }
    return(
        <nav className="navegation">
            <div className="init">
                <FontAwesomeIcon icon={faBars} className='bars' onClick={showMenu}/>
                <img src="https://i.imgur.com/tb7YDsl.png" alt="" />
                <div className="info">
                    <FontAwesomeIcon icon={faArrowDown} className='bars2' onClick={() => showPersonal(conditionPersonal)}/>
                    <div className={`my-info ${personal}`}>
                        <div className="personal">
                            <FontAwesomeIcon icon={faClock} className='icon-personal'/>
                            <div className="info-personal">
                                <p>
                                    isdksadsdhksahd
                                </p>
                                <p>
                                    9479873182731297
                                </p>
                            </div>
                        </div>
                        <div className="personal ">
                            <FontAwesomeIcon icon={faMapMarked} className='icon-personal'/>
                            <div className="info-personal">
                                <p>
                                    isdksadsdhksahd
                                </p>
                                <p>
                                    9479873182731297
                                </p>
                            </div>
                        </div>
                        <div className="personal ">
                            <FontAwesomeIcon icon={faMobile} className='icon-personal'/>
                            <div className="info-personal">
                                <p>
                                    isdksadsdhksahd
                                </p>
                                <p>
                                    9479873182731297
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`menu ${movil}`}>
                <Link to='/'>Home</Link>
                <a href=".">
                    galeria
                </a>
                <a href=".">
                    sobre mi
                </a>
            </div>
        </nav>
    )
}
export default Navbar