function jugar(eleccionJugador) {
  const opciones = ['peñon', 'papel', 'tijeras'];
  const eleccionCPU = opciones[Math.floor(Math.random() * 3)];

  let resultado = '';

  if (eleccionJugador === eleccionCPU) {
    resultado = '¡Empate!';
  } else if (
    (eleccionJugador === 'peñon' && eleccionCPU === 'tijeras') ||
    (eleccionJugador === 'papel' && eleccionCPU === 'peñon') ||
    (eleccionJugador === 'tijeras' && eleccionCPU === 'papel')
  ) {
    resultado = `🎉 Tú ganas (${eleccionJugador} vence a ${eleccionCPU})`;
  } else {
    resultado = `😢 Pierdes (${eleccionCPU} vence a ${eleccionJugador})`;
  }

  const jugadasDiv = document.getElementById('jugadas');
  jugadasDiv.innerHTML = `
    <div style="display:flex; justify-content:center; align-items:center; gap:20px; margin-top:20px;">
      <div>
        <p>Tú</p>
        <img src="img/${eleccionJugador}.png" width="100">
      </div>
      <div>
        <p>CPU</p>
        <img src="img/${eleccionCPU}.png" width="100">
      </div>
    </div>
  `;

  document.getElementById('resultado').textContent = resultado;
}

function reiniciar() {
  document.getElementById('resultado').textContent = '';
  document.getElementById('jugadas').innerHTML = '';
}
