import Button from "./Button"
import Card from "./Card";
import { useState } from 'react'

export default function Main({ languages }) {


    const [active, setActive] = useState(-1)

    function handleClick(lang) {
        if (lang.id === active) {
            setActive(-1)
        } else {
            setActive(lang.id)
        }
    }



    return (
        <>
            <main>
                <div className="container">

                    <ul className="navbar">
                        {languages.map(language => {
                            return (
                                <li key={language.id}>
                                    <Button handle={() => handleClick(language)} lang={language} act={active} />
                                </li>
                            )
                        })}

                    </ul>

                    {languages.map(language => {


                        return language.id === active ? (

                            <Card key={language.id} lang={language} />
                        ) : ''
                    })}

                    {active === -1 && <p>Nessun linguaggio selezionato</p>}




                </div>

            </main>
        </>
    )
}