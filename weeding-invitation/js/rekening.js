        function copyText() {
          const copyField = document.getElementById("copyText");
          copyField.select();
          copyField.setSelectionRange(0, 99999);
          navigator.clipboard.writeText(copyField.value);
          swal("No Rekening Berhasil Tersalin", copyField.value, "success");
        }

        function copyText2() {
          const copyField = document.getElementById("copyText2");
          copyField.select();
          copyField.setSelectionRange(0, 99999);
          navigator.clipboard.writeText(copyField.value);
          swal("No Rekening Berhasil Tersalin", copyField.value, "success");
        }