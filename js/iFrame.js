var isExternalPageOpen = false;
        var iframe;

        function toggleExternalPage(String) {
            // Get the container element
            var container = document.getElementById('iframeContainer');

            // If the external page is open, close it
            if (isExternalPageOpen) {
                container.style.display = 'none';
                isExternalPageOpen = false;
            } else {
                // Create an iframe element
                iframe = document.createElement('iframe');

                // Set the source of the external website to a local HTML file
                iframe.src = String;

                // Append the iframe to the container
                container.innerHTML = '';
                container.appendChild(iframe);

                container.style.display = 'block';
                isExternalPageOpen = true;
            }
        }

        // Event listener for the "Escape" key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeExternalPage();
            }
        });

        function closeExternalPage() {
            // Get the container element
            var container = document.getElementById('iframeContainer');

            // Close the external page
            container.style.display = 'none';
            isExternalPageOpen = false;
            console.log("Button clicked. Closing external page.");
        }