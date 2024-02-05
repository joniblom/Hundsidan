document.addEventListener('DOMContentLoaded', function () {
    // Call the function to populate the dropdowns when the DOM is fully loaded
    populateDropdowns();

    // Function to populate the dropdowns from a text file
    function populateDropdowns() {
        // Fetch the dog breeds from the text file
        fetch('dog-breeds.txt')
            .then(response => response.text())
            .then(data => {
                const breeds = data.split('\n');
                populateDropdown('dropdown1', breeds);
                populateDropdown('dropdown2', breeds);
            })
            .catch(error => console.error('Error fetching dog breeds:', error));
    }

    // Function to populate a dropdown with options
    function populateDropdown(dropdownId, options) {
        const dropdown = document.getElementById(dropdownId);
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            dropdown.appendChild(optionElement);
        });
    }

    // Function to perform Google Image search
    function performGoogleImageSearch() {
        // Rest of the code for Google Image search
    }

    // Function to display image search results
    function displayImageResults(images) {
        // Rest of the code for displaying image results
    }
});
