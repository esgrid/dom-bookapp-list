document.addEventListener('DOMContentLoaded', () => {
        console.log('Javascript content has loaded');
        // const form = document.querySelector('#form');
        // form.addEventListener('submit', handleFormSubmit);
        document.querySelector('#form').addEventListener('submit', handleFormSubmit);
        document.querySelector('#delete-all').addEventListener('click', handleDeleteButton);
        document.querySelector('#form-genre').addEventListener('submit', handleFormGenre);
        document.querySelector('#author').addEventListener('input', handleInput);
        document.querySelector('#title').addEventListener('input', handleInput);
        document.querySelector('#genre').addEventListener('change', handleSelect);
    }
);

const handleSelect = (event) => {
    document.querySelector('#book').textContent = `Genre: ${event.target.value}`;
}

const handleInput = (event) => {
    let property = event.target.id;
    property = property.charAt(0).toUpperCase() + property.slice(1);
    document.querySelector('#book').textContent = `${property}: ${event.target.value}`
}

const handleFormGenre = (event) => {
    event.preventDefault();
    const newGenreElement = document.createElement('option');
    newGenreElement.textContent = `${this.new_genre.value}`;
    document.querySelector('#genre').appendChild(newGenreElement);
    document.querySelector('#form-genre').reset();
}

const handleDeleteButton = () => {location.reload();}

const handleFormSubmit = (event) => {
    event.preventDefault();
    const newListItem = document.createElement('li');
    newListItem.textContent = `
                                ${this.author.value}, 
                                ${this.title.value} - 
                                ${this.genre.value}
                                `;
    document.querySelector('ul').appendChild(newListItem);
    document.querySelector('#form').reset();
    document.querySelector('#book').textContent = '';
}