

export default function Main(language) {


    return (
        <>
            <main>

                <ul className="navbar">
                    {language.map(item => {
                        return (
                            <li key={item.id}>
                                <button>

                                </button>
                            </li>
                        )
                    })
                    }

                </ul>

            </main>
        </>
    )
}