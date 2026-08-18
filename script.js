document.getElementById("year").textContent =
            new Date().getFullYear();

        function downloadPDF() {
            const button =
                document.querySelector(".download-btn");

            const originalText =
                button.innerHTML;

            button.innerHTML =
                "⏳ Abriendo impresión...";

            button.disabled =
                true;

            window.print();

            button.innerHTML =
                originalText;

            button.disabled =
                false;
        }
