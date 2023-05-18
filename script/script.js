const fs = require('fs');

function leerArchivoXML(archivo) {
  fs.readFile(archivo, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');

    const usuarios = xmlDoc.getElementsByTagName('usuario');
    
    for (let i = 0; i < usuarios.length; i++) {
      const usuario = usuarios[i];
      const nombre = usuario.getAttribute('nombre');
      const steamId = usuario.getAttribute('steam_id');
      const estadisticas = usuario.getElementsByTagName('estadisticas')[0].attributes;
      const rango = usuario.getElementsByTagName('rango')[0].attributes;
      const armas = usuario.getElementsByTagName('arma');

      console.log('Nombre:', nombre);
      console.log('Steam ID:', steamId);
      console.log('Estadísticas:', estadisticas);
      console.log('Rango:', rango);
      console.log('Armas:', armas);
      console.log('-----------------------------');
    }
  });
}

// Uso de la función
leerArchivoXML('../proyecto.xml');
