const selectEspacios = document.getElementById('espacios');
const informacionEspacio = document.getElementById('informacion-espacio');

selectEspacios.addEventListener('change', function() {
  const selectedValue = selectEspacios.value;
  
  if (selectedValue === 'espacio-libre') {
    informacionEspacio.innerHTML = '<a href="file:///D:/Inno/paraimprimir.jpg" target="_blank"><img src="file:///D:/Inno/paraimprimir.jpg" alt="Espacio libre" width="400" height="300"></a>';
  } else if (selectedValue === 'biblioteca') {
    informacionEspacio.textContent = 'Información sobre Biblioteca';
  } else if (selectedValue === 'sala-estudio') {
    informacionEspacio.textContent = 'Información sobre Sala de estudio';
  } else {
    informacionEspacio.textContent = '';
  }
});