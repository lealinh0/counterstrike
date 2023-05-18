function leerArchivoXML(archivo) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(this.responseText, 'text/xml');

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
        console.log('Estadísticas:', obtenerAtributos(estadisticas));
        console.log('Rango:', obtenerAtributos(rango));
        console.log('Armas:', obtenerArmas(armas));
        console.log('-----------------------------');
      }
    }
  };
  xhttp.open('GET', archivo, true);
  xhttp.send();
}

function obtenerAtributos(nodo) {
  const atributos = {};

  for (let i = 0; i < nodo.length; i++) {
    const atributo = nodo[i];
    atributos[atributo.name] = atributo.value;
  }

  return atributos;
}

function obtenerArmas(nodos) {
  const armas = [];

  for (let i = 0; i < nodos.length; i++) {
    const arma = nodos[i];
    const nombre = arma.getAttribute('nombre');
    const atributos = obtenerAtributos(arma.attributes);
    armas.push({ nombre, ...atributos });
  }

  return armas;
}

// Uso de la función
leerArchivoXML('./proyecto.xml');

