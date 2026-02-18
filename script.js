const dataInicio = new Date("2026-02-17T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  if (diferenca < 0) {
    document.getElementById("dias").innerText = 0;
    document.getElementById("horas").innerText = "00";
    document.getElementById("minutos").innerText = "00";
    document.getElementById("segundos").innerText = "00";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = String(horas).padStart(2, '0');
  document.getElementById("minutos").innerText = String(minutos).padStart(2, '0');
  document.getElementById("segundos").innerText = String(segundos).padStart(2, '0');
}

setInterval(atualizarContador, 1000);
atualizarContador();
