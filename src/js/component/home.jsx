import React, { useState, useEffect, useRef } from "react";

//create your first component
const Home = () => {
  const songURL = "https://assets.breatheco.de/apis/sound/songs";
  const [listadecanciones, setListadecanciones] = useState([]);
  const [posicion, setPosicion] = useState(0);
  const [urlreproducir, setUrlreproducir] = useState(null);
  const [playing, setPlaying] = useState(false);
  const reproducir = useRef(null);

  //aca los useEffect
  useEffect(() => {
    //codigo a ejecutar
    console.log("La pagina se ha cargado exitosamente");
    fetch(songURL) //1.ir a buscar info en la url
      .then((response) => response.json()) //2.Convierte la respuesta en un json
      .then((data) => setListadecanciones(data)); //3. GUarda el json en un objeto data
  }, []); //cuando el array está vacio el va a cargar el codigo a ejecutar UNA vez cargada la pagina
  console.log(listadecanciones);

  function tocarCancion(url, index) {
    reproducir.current.src = "https://assets.breatheco.de/apis/sound/" + url;
    reproducir.current.play();
    //   console.log(reproducir.current);
    //   console.log(listadecanciones);
    //  console.log(listadecanciones[1].url)
    //  console.log(url)
    console.log(tocarCancion);
    posicion(index);
  }
  const play = (index) => {
    setUrlreproducir(index);
    setPlaying(true);
    reproducir.current.play();
  };
  const pause = () => {
    setPlaying(false);
    reproducir.current.pause();
  };

  const next = () => {
    setPosicion(posicion + 1);
    reproducir.current.src = `https://assets.breatheco.de/apis/sound/${listadecanciones[posicion].url}`;
    reproducir.current.play();
  };

  const back = () => {
    setPosicion(posicion - 1);
    reproducir.current.src = `https://assets.breatheco.de/apis/sound/${listadecanciones[posicion].url}`;
    reproducir.current.play();
  };

  return (
    <>
      <div className="container w-50 bg-dark fw-bolder text-white "  id="spotify">Spotify <img src="https://th.bing.com/th/id/R.148b28a3992349e8db92184c65d24bbd?rik=AJNg4RcAH8fwOg&riu=http%3a%2f%2forig12.deviantart.net%2f846f%2ff%2f2015%2f245%2f9%2fb%2fnew_spotify_icon_by_mattroxzworld-d98301o.png&ehk=4kqixXCdaWV6y4x6GzGcuj9iskpnJgcYXxemWAfh3cc%3d&risl=&pid=ImgRaw&r=0" width="50"
                                  height="50"></img></div>
      
      <div className="container w-50 bg-dark">
      
        {/* dibujamos la lista de canciones */}
        {/* <div className="list-group bg-dark rounded-0" id="navbar"> */}
        {/* dibujamos la lista de canciones */}
        <ol className="list-group list-group-numbered ">
          {listadecanciones.map((item, index) => (
            <button
              className="btn btn-dark text-start p-1"
              onClick={() => tocarCancion(item.url, index)}
            >
              <li
                className="list-group-item bg-dark bg-gradient text-white "
                aria-current="true"
                key={item.id}
              >
                {item.name}
              </li>
            </button>
          ))}
        </ol>
        <div className="">
          <audio ref={reproducir} className="">
            {" "}
          </audio>
          <div className="d-flex justify-content-center">
            <button onClick={back} type="button" className="btn btn-dark rounded-circle " style={{ height: 50, width: 50 }}>
              {" "}
              {" "}
              <i class="fa fa-backward"></i>
            </button>
            <button onClick={play} type="button" className="btn btn-dark rounded-circle" style={{ height: 50, width: 50 }}>
              {" "}
              {" "}
              <i class="fa fa-play"></i>
            </button>
            <button onClick={pause} type="button" className="btn btn-dark rounded-circle" style={{ height: 50, width: 50 }}>
              {" "}
              {" "}
              <i class="fa fa-pause"></i>
            </button>
            <button onClick={next} type="button" className="btn btn-dark rounded-circle" style={{ height: 50, width: 50 }}>
              {" "}
              {" "}
              <i class="fa fa-forward"></i>
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
