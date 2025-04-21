function openModal(videoUrl) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoFrame');

  // Intenta añadir el parámetro autoplay=1.
  // Nota: Puede que no funcione con todos los embeds o navegadores.
  // Para Google Drive, el formato /preview generalmente no soporta autoplay directamente.
  // Si tuvieras un enlace de embed diferente, podría funcionar mejor.
  let finalUrl = videoUrl;
  if (finalUrl.includes('?')) {
      finalUrl += '&autoplay=1';
  } else {
      finalUrl += '?autoplay=1';
  }

  iframe.src = finalUrl; // Añade ?autoplay=1 o &autoplay=1
  modal.style.display = 'flex'; // Muestra el modal
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoFrame');
  iframe.src = ''; // Detiene el vídeo al quitar la URL
  modal.style.display = 'none'; // Oculta el modal
}