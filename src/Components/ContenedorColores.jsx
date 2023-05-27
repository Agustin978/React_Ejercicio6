import CardsColores from "./CardsColores";

const ContenedorColores = ({arregloColores, coloresGuardados}) => {
    //console.log(arregloColores);
    //console.log(coloresGuardados);
    return (
        <div>
            <section className="container">
                <aside className="row">
                        {coloresGuardados.map((color, index) => {
                            //console.log(color);
                            //console.log(arregloColores[color]);
                            return (<article className="col-12 col-md-4 mt-1" key={index}><CardsColores color={color} codigoColor={arregloColores[color]}/></article>);
                        })}
                </aside>
            </section>
        </div>
    );
};

export default ContenedorColores;