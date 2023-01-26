const API = 'https://api.github.com/users'
const body = document.body

const form = document.querySelector('form')
const input = document.getElementById('inp')
const output = document.querySelector('.output')
// console.log(url);

const searchGiphy = async () => {
    let url = API + '/' + input.value
    const request = await fetch(url)
    const response = await request.json()
    renderGiphy(response);
}

const renderGiphy = e => {
    output.innerHTML = ''
    const avatar_url = document.createElement('img')
    avatar_url.classList.add('avatar')
    avatar_url.src = e.avatar_url
    const login = document.createElement('h2')
    login.textContent = e.login
    const name = document.createElement('h2')
    name.textContent = e.name
    const email = document.createElement('h3')
    if (e.email == null) {
        email.textContent = 'Пользователь не указал почту'
    } else {
        email.textContent = e.email
    }
    const a = document.createElement('a')
    a.href = e.html_url
    const bio = document.createElement('h3')
    bio.textContent = e.bio


    a.append(avatar_url)
    output.append(a, login, name, email, bio)
    input.value = ''
}



form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchGiphy()
})