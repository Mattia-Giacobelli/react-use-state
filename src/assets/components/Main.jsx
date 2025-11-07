import Button from "./Button"

export default function Main({ languages }) {

    console.log(<Button />);


    return (
        <>
            <main>
                <div className="container">

                    <ul className="navbar">
                        {languages.map(language => {
                            return (
                                <li key={language.id}>
                                    <Button lang={language} />
                                </li>
                            )
                        })}

                    </ul>

                </div>

            </main>
        </>
    )
}