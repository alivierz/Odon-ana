import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons"

const Clientes = () =>{
    const arrHappy = ['https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/265837924_116238080888969_3791017460547038047_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=q6TfQ-Sb2jsAX_RibX4&tn=fXr0P6jz8JdItmWu&_nc_ht=scontent-bog1-1.xx&oh=00_AT9nZmMxR4p1icgFzMbkhVlaaTAbeb05lq3SHWpycpZPyA&oe=628AF8CB',
                        'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/264234613_116238104222300_6756279747870295941_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=H9xMKPhGMW4AX8dy8ff&_nc_ht=scontent-bog1-1.xx&oh=00_AT8-FcvG6YpiL6baxBZ1a5pPyqI3uOEg32MA9g72BpnpTA&oe=628C20FA',
                    'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/267243952_116238130888964_8322512891718697545_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=YlSra8yopbIAX-PVQnr&_nc_ht=scontent-bog1-1.xx&oh=00_AT9Oxr1Qm6qOv-t9JQiUFk72suyfZHOCm0s0i-KofI8kWQ&oe=628C026D',
                    'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/266316266_116238184222292_7529597663589393112_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=MfYsLHWfg_YAX9KuyuC&_nc_ht=scontent-bog1-1.xx&oh=00_AT_4mSmJFf7kK8gYD8A1bJ-9RCax7iA71e9Hm17e0wZasA&oe=628BA13C',
                    'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/265960652_116238237555620_7662001964425618108_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=nzYAkaiVhc8AX_fMW-_&_nc_ht=scontent-bog1-1.xx&oh=00_AT-V1zjnZM632OisJpDnDoGxM5Z3pXoS-HYQjWbesSGbKw&oe=628C1A41',
                    'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/266795680_116238300888947_6982341766802086878_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=ffsyxa8OhKkAX-1PP5q&tn=fXr0P6jz8JdItmWu&_nc_ht=scontent-bog1-1.xx&oh=00_AT9FrP02-nwr_ygW7g4LJ5ot8O0TME4-zTzFiK-T8M7l7g&oe=628C512D']

    const list = arrHappy.map((value) => <motion.div key={value} className='item-m'> <img src={value} alt=""  /></motion.div>)

    return(
        <div>
            <div className="titulo-servicio">
               <h3>Buen servicio y atencion</h3>
               <FontAwesomeIcon icon={faArrowsAltH} className='iconarrow'/> 
            </div>
            <motion.div  className='slider-container'>
                <motion.div className="slider-m" drag='x' dragConstraints={{right: 0, left: -1749}} >
                    {list}
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Clientes