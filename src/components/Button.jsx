


export default function Button({ lang, handle, act }) {





    return (
        <>
            <button onClick={handle} className={lang.id === act ? "active" : ""}>
                {lang.title}
            </button>

        </>
    )
}

