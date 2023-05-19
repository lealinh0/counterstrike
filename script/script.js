function ejecutar(){


  // Solicitar al usuario el ID del jugador
  const playerId = prompt("Ingresa el ID del jugador:");
  
  // URL del archivo XML
  const xmlUrl = "https://lealinh0.github.io/counterstrike/proyecto.xml";
  
  // Cargar el archivo XML utilizando fetch
  fetch(xmlUrl)
    .then(response => response.text())
    .then(xmlString => {
      // Crear un objeto DOMParser
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
      // Encontrar el jugador con el ID proporcionado
      const jugador = xmlDoc.querySelector(`usuario[steam_id="${playerId}"]`);
  
      if (jugador) {
        // Obtener la información del jugador
        const nombre = jugador.getAttribute("nombre");
        const estadisticas = jugador.querySelector("estadisticas");
        const partidasJugadas = estadisticas.getAttribute("partidas_jugadas");
        const partidasGanadas = estadisticas.getAttribute("partidas_ganadas");
        const asesinatos = estadisticas.getAttribute("asesinatos");
        const muertes = estadisticas.getAttribute("muertes");
  
        // Mostrar la información del jugador
        console.log("Información del jugador:");
        console.log(`Nombre: ${nombre}`);
        console.log(`Partidas jugadas: ${partidasJugadas}`);
        console.log(`Partidas ganadas: ${partidasGanadas}`);
        console.log(`Asesinatos: ${asesinatos}`);
        console.log(`Muertes: ${muertes}`);
      } else {
        console.log("Jugador no encontrado.");
      }
    })
    .catch(error => {
      console.log("Ocurrió un error al cargar el archivo XML:", error);
    });

}






