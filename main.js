import './style.css'
import logoZ from './ZeewLogo.webp'
import jsinto from './data.json'


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Zeew Space</h1>
    <p>${jsinto.user.name}</p>
    <pre>${JSON.stringify(jsinto)}</pre>
  </div>
`

const img = document.getElementById('img')
img.src = logoZ