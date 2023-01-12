import React, {useState, useEffect} from "react";


//create your first component
const Home = () => {

	//declaramos estado del contador
	const [counter, setCounter]= useState(0);
	const [characters, setCharacters] =useState([]);
	const songURL = "https://assets.breatheco.de/apis/sound/songs";

	// function handlecounter() {
	// 	setCounter(counter+1)
	// }

	// useEffect(()=>{
	// 	//codigo a ejecutar
	// 	console.log("Haz aumentado el numero de seguidor");
	// },[counter])//cuando el array está lleno el efecto va a cargar el codigo a ejecutar VARIAS VECES

	useEffect(()=>{
		//codigo a ejecutar
	console.log("La pagina se ha cargado exitosamente");
	fetch(songURL) //1.ir a buscar info en la url
	.then((response)=>response.json()) //2.Convierte la respuesta en un json
	.then((data)=>setCharacters(data)) //3. GUarda el json en un objeto data

	},[])//cuando el array está vacio el va a cargar el codigo a ejecutar UNA vez cargada la pagina
console.log(characters);
	return (
		<>
		<h1>Usando UseEffect</h1>
		<h2>Contador: {counter}</h2>
		<button onClick={()=>setCounter(counter+1)}>Click acá</button>
{/* dibujamos la lista de canciones */}
		<ol className="list-group list-group-numbered" id="list">
			{characters.map((item)=>
			<li className="list-group-item" aria-current="true" key={item.id}>{item.name}</li>)}
		</ol>
		</>
	);
};

export default Home;

