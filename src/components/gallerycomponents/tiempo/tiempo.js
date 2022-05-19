import { useState } from "react"

const Tiempo = () =>{
    const antesDespues = [
        {
            antes: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/271694373_124318920080885_7127088788014250776_n.png?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=fSPYHle5GjYAX-pT26k&_nc_ht=scontent-bog1-1.xx&oh=00_AT8yR72ImQRqV025t3aVhiu8ZejF0SA2Y98S-Hakl3xPpg&oe=628A8866',
            despues: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/271603724_124318996747544_52279284504177070_n.png?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=drXV_NIBNNIAX9NwSp5&_nc_ht=scontent-bog1-1.xx&oh=00_AT8V_hftvVR8tDmSiIsTv2dQvPtRUXBoMETxi9j04vpYZQ&oe=628C4A16'
        },
        {
            antes: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/272119158_126768689835908_4733361784213136512_n.png?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=YZhN9m1Z_7YAX-q9g1p&_nc_ht=scontent-bog1-1.xx&oh=00_AT8i2XGXPrFe0pMnVzcUvbS5xoQhzlWtJOkNNsWnaLQXnQ&oe=628AE8C4',
            despues: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/272344699_126768746502569_2743027382110159760_n.png?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=GUq1CoN9DqQAX_dKpAY&tn=fXr0P6jz8JdItmWu&_nc_ht=scontent-bog1-1.xx&oh=00_AT-zQZvRt3kopjwBJ6Q_0BLosLYQSOhVKiadLGGbNXKAfA&oe=628C2086'
        },
        {
            antes: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/272018820_126769203169190_4636323679857224620_n.png?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=RlwEcgXJvAYAX8d6Grg&_nc_ht=scontent-bog1-1.xx&oh=00_AT9JDuGtFQFO0deXHMiLxlVIXExZNzAqpcgLFisgQbeDTQ&oe=628C7EC8',
            despues: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/272085611_126769246502519_8828432571450121213_n.png?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=w4yDmJeQyhsAX-DsnkA&_nc_ht=scontent-bog1-1.xx&oh=00_AT_6MEOyY_Zt2dF-IWJRWFzPHOetWaRpldVQByULWd_TMA&oe=628C497C'
        },
        {
            antes: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/272227487_126769616502482_4794251143877574623_n.png?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=96vwjP472A8AX-vPi7U&tn=fXr0P6jz8JdItmWu&_nc_ht=scontent-bog1-1.xx&oh=00_AT_1Qy226ucySqC4oKjdnM7piA8SpoQp7pXzqmVaSn9_EQ&oe=628C4F23 ',
            despues: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/271957115_126769639835813_2877890156413664765_n.png?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=3iAtSffm4iwAX-oIn8K&_nc_ht=scontent-bog1-1.xx&oh=00_AT9K41DI_7aSjdeJWCPIhnniQiwMJXLhhAyqIcJ2VFgwjg&oe=628B98CF'
        }
    ]
    const [despues , setDespues] = useState(true)
    const [counter, setCounter] = useState(0)

    const func = () =>{
        if(counter > antesDespues.length - 2){
            setCounter(0)
        }else{
            setCounter(counter + 1)
        }
    }
    return(
        <div className="tiempo">
            <h2>Antes y Despues</h2>
            <div className="imagen-tiempo">
                {despues ? <img src={antesDespues[counter].antes} alt="" /> : <img src={antesDespues[counter].despues} alt="" />}
            </div>
            <div className="buttons">
                <button onClick={() => setDespues(!despues)}>{despues ? 'Despues' : 'Antes'}</button>
                <button onClick={func}>Otro pasiente</button>
            </div>
        </div>
    )
}
export default Tiempo