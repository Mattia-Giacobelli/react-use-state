export default function Card({ lang }) {


    return (
        <>

            <div className="card">
                <h2>{lang.title}</h2>
                <p>{lang.description}</p>
            </div>

        </>
    )
}