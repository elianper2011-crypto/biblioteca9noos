document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const titulo = document.getElementById('titulo').value.trim();
  const enlace = document.getElementById('enlace').value.trim();
  const msg = document.getElementById('msg');

  if (!nombre || !titulo || !enlace) {
    msg.textContent = "Por favor completa todos los campos.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Enviando...";
  msg.style.color = "blue";

  const url = "https://script.google.com/macros/s/AKfycbzR0w5Z_vkwRLD1hA0Eqdn3_aIOZjH-z1fImVZ6nzPzINjLxYHJ9m3y4DxZ_NKyLSe4fQ/exec";

  try {
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `nombre=${encodeURIComponent(nombre)}&titulo=${encodeURIComponent(titulo)}&enlace=${encodeURIComponent(enlace)}`
    });
    msg.textContent = "✅ Trabajo enviado con éxito.";
    msg.style.color = "green";
    document.getElementById('uploadForm').reset();
  } catch (error) {
    msg.textContent = "❌ Error al enviar. Intenta de nuevo.";
    msg.style.color = "red";
  }
});
