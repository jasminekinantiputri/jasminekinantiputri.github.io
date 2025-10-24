 // Ganti URL ini dengan URL Google Apps Script kamu
        const scriptURL = "https://script.google.com/macros/s/AKfycbyLrxIou6nu12CocINwMktxi-PtikPQX53gPSBBXHdO1V8pH_M9pdLWnRwigadnKoW7/exec";

        document.getElementById("formKehadiran").addEventListener("submit", async (e) => {
          e.preventDefault();

          const data = {
            nama: document.getElementById("name").value.trim(),
            ucapan: document.getElementById("message").value.trim(),
            kehadiran: document.getElementById("attendance").value
          };

          if (!data.nama || !data.ucapan || !data.kehadiran) {
            alert("Mohon isi semua kolom terlebih dahulu 💕");
            return;
          }

          await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(data),
          });

          swal("Terkirim", "Terima kasih atas ucapan dan konfirmasinya! 💖", "success");
          document.getElementById("formKehadiran").reset();
          loadData();
        });

        // Ambil data dari spreadsheet dan tampilkan
        async function loadData() {
          const res = await fetch(scriptURL);
          const data = await res.json();
          const container = document.getElementById("cards");
          container.innerHTML = "";

          data.reverse().forEach((item) => {
            const card = document.createElement("div");
            card.className = "card-ucapan";
            card.innerHTML = `
              <h4>${item.nama}</h4>
              <p><i>"${item.ucapan}"</i></p>
              <strong>${item.kehadiran}</strong>
            `;
            container.appendChild(card);
          });
        }

        loadData();