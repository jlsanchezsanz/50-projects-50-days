const filter = document.querySelector('#filter');
const result = document.querySelector('#result');
const listItems = [];

filter.addEventListener('input', (e) => {
  const value = e.target.value;

  filterData(value);
});

async function getUsers() {
  const res = await fetch('https://randomuser.me/api?results=50');
  const { results } = await res.json();

  result.innerHTML = '';

  results.forEach(user => {
    const userEl = document.createElement('li');
    listItems.push(userEl);

    userEl.innerHTML = `
      <img
        src="${user.picture.large}"
        alt="${user.name.first}"
      />
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;

    result.appendChild(userEl);
  });
};

getUsers();

function filterData(searchTerm) {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}