document.addEventListener('DOMContentLoaded', () => {
    const showFilters = document.getElementById('show-filters');
    const filterMenu = document.getElementById('filter-menu');
    const defaultFilter = document.getElementById('default-filter');
    const defaultFilterMenu = document.getElementById('default-filter-menu');

    // Show/Hide filter menu
    showFilters.addEventListener('click', (e) => {
        e.preventDefault();
        filterMenu.classList.toggle('hidden');
    });

    // Show default filter menu on hover
    defaultFilter.addEventListener('mouseenter', () => {
        defaultFilterMenu.classList.remove('hidden');
    });

    // Hide default filter menu on mouse leave
    defaultFilter.addEventListener('mouseleave', () => {
        defaultFilterMenu.classList.add('hidden');
    });

    // Hide default filter menu when mouse leaves the menu itself
    defaultFilterMenu.addEventListener('mouseleave', () => {
        defaultFilterMenu.classList.add('hidden');
    });

    // Toggle sub-options for filter categories
    document.querySelectorAll('.filter-option > label').forEach(label => {
        label.addEventListener('click', (e) => {
            const subOptions = e.target.parentElement.querySelector('.sub-options');
            if (subOptions) {
                subOptions.classList.toggle('hidden');
            }
        });
    });

    // Handle filter product function
    const checkboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    function filterProducts() {
        const selectedFilters = Array.from(document.querySelectorAll('.filter-option input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);
        
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const matches = selectedFilters.length === 0 || selectedFilters.some(filter => card.dataset.category.includes(filter));
            card.style.display = matches ? 'block' : 'none';
        });
    }
});
