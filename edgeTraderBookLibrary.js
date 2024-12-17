

<!--EdgeTrader Book Library js Script-->

    <script>
        document.getElementById('searchBar').addEventListener('input', function() {
            const searchQuery = this.value.toLowerCase();
            const bookItems = document.querySelectorAll('.book-item');

            // Update the URL with the search query
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('query', searchQuery);
            window.history.pushState({}, '', newUrl);

            bookItems.forEach(function(item) {
                const bookName = item.querySelector('.book-name').textContent.toLowerCase();
                const bookDescription = item.querySelector('.book-description').textContent.toLowerCase();
                if (bookName.includes(searchQuery) || bookDescription.includes(searchQuery)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        // Perform search on page load if query parameter is present
        window.addEventListener('load', function() {
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('query');
            if (query) {
                document.getElementById('searchBar').value = query;
                const event = new Event('input');
                document.getElementById('searchBar').dispatchEvent(event);
            }
        });
    </script>


<!--EdgeTrader Book Library js Script-->

