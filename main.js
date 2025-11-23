function iniciarContagem() {
  // Data alvo: 16 de janeiro de 2026 às 00:00
  const alvo = new Date("2026-01-16T00:00:00");

  function atualizar() {
    const agora = new Date();
    const diff = alvo - agora;

    // Quando chegar o dia 16/01/2026
    if (diff <= 0) {
      document.getElementById("days").textContent = "H";
      document.getElementById("hours").textContent = "O";
      document.getElementById("minutes").textContent = "J";
      document.getElementById("seconds").textContent = "E";

      document.querySelectorAll(".count-card label").forEach((l) => {
        l.textContent = "";
      });

      return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = dias.toString().padStart(2, "0");
    document.getElementById("hours").textContent = horas.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutos.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = segundos.toString().padStart(2, "0");
  }

  atualizar();
  setInterval(atualizar, 1000);
}


iniciarContagem();