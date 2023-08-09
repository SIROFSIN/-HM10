document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.header__search-btn');
    const searchFormContainer = document.querySelector('.search-form-container');
  
    searchButton.addEventListener('click', () => {
      searchFormContainer.style.display = 'block';
    });
  
    searchFormContainer.addEventListener('click', (event) => {
      if (event.target === searchFormContainer) {
        searchFormContainer.style.display = 'none';
      }
    });
  });
  