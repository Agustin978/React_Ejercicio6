import CardsColores from "./CardsColores";

const ContenedorColores = ({arregloColores, coloresGuardados}) => {
    return (
        <div>
            <section className="container">
                <aside className="row">
                        {coloresGuardados.map((color, index) => {
                            return (<article className="col-12 col-md-4 mt-1" key={index}><CardsColores color={color} codigoColor={arregloColores[color]}/></article>);
                        })}
                </aside>
            </section>
        </div>
    );
};

export default ContenedorColores;