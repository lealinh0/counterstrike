function ejecutar(){

  const playerId = prompt("Ingresa el ID del jugador:");
  
  const xmlUrl = "https://lealinh0.github.io/counterstrike/proyecto.xml";
  
  fetch(xmlUrl)
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  

      const jugador = xmlDoc.querySelector(`usuario[steam_id="${playerId}"]`);
  
      if (jugador) {

        const nombre = jugador.getAttribute("nombre");
        const estadisticas = jugador.querySelector("estadisticas");
        const partidasJugadas = estadisticas.getAttribute("partidas_jugadas");
        const partidasGanadas = estadisticas.getAttribute("partidas_ganadas");
        const asesinatos = estadisticas.getAttribute("asesinatos");
        const muertes = estadisticas.getAttribute("muertes");
  

        console.log("Información del jugador:");
        console.log(`Nombre: ${nombre}`);
        console.log(`Partidas jugadas: ${partidasJugadas}`);
        console.log(`Partidas ganadas: ${partidasGanadas}`);
        console.log(`Asesinatos: ${asesinatos}`);
        console.log(`Muertes: ${muertes}`);

        alert("Información del jugador:"
        `Nombre: ${nombre}`
        `Partidas jugadas: ${partidasJugadas}`
        `Partidas ganadas: ${partidasGanadas}`
        `Asesinatos: ${asesinatos}`
        `Muertes: ${muertes}`
        );
      } else {
        console.log("Jugador no encontrado.");
      }
    })
    .catch(error => {
      console.log("Ocurrió un error al cargar el archivo XML:", error);
    });

}






