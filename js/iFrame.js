        var isExternalPageOpen = false;
        var iframe;

        function toggleExternalPage() {
            // Get the container element
            var container = document.getElementById('iframeContainer');

            // If the external page is open, close it
            if (isExternalPageOpen) {
                container.innerHTML = '';
                isExternalPageOpen = false;
            } else {
                // Create an iframe element
                iframe = document.createElement('iframe');

                // Set the source of the external website
                iframe.src = 'https://jonasaija.github.io/Portfolio/unityc';

                // Append the iframe to the container
                container.innerHTML = '';
                container.appendChild(iframe);

                isExternalPageOpen = true;
            }
        }