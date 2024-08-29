document.addEventListener('click', function (event) {
    var dropdown = document.querySelector('.dropdown-content');
    var dropbtn = document.querySelector('.dropbtn');

    if (event.target.matches('.dropbtn')) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    } else {
        if (!event.target.matches('.dropdown-content a')) {
            dropdown.style.display = 'none';
        }
    }
});

function selectOption(option) {
    var dropbtn = document.querySelector('.dropbtn');
    var searchInput = document.getElementById('searchInput');
    var dropdown = document.querySelector('.dropdown-content');

    dropbtn.innerHTML = `${option}`; 
    searchInput.placeholder = `Search ${option}`; 
    dropdown.style.display = 'none'; 
}
