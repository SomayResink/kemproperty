const form = document.getElementById("leadForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const button = form.querySelector("button");

  button.innerText = "Mengirim...";

  const data = {
    nama: document.getElementById("nama").value,
    email: document.getElementById("email").value,
    wa: document.getElementById("wa").value,
  };

  try {

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    alert(result.message);

    form.reset();

  } catch (error) {

    alert("Terjadi kesalahan");

  }

  button.innerText = "Konsultasi Gratis";
});