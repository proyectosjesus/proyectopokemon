import "./Stadisticas.css";

function Stadisticas(props) {

  return (
    <>
      <div className="contenido">
        <div className="historia">
          <h1>{props.nombre==1?"":props.nombre}</h1>
          <p>{props.historia}</p>
        </div>
        <div className="stadisticas">
          {props.tipo.map((tipo) => (
            <div key={tipo.slot}>
              
              <h1>{tipo.type.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Stadisticas;
