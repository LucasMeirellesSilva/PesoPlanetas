const select = document.querySelector('select');
const mass = document.querySelector('#massa');
const img = document.querySelector('img');
const descricao = document.querySelector('.descricao');
const planets = ['terra','jupiter', 'marte', 'mercurio', 'lua', 'netuno', 'plutao', 'saturno', 'urano', 'venus'];
const bttn = document.querySelector('button');
const newP = document.createElement('p')
let peso;
let gravidade;

descricao.style.backgroundColor = 'rgba(173, 173, 173, 0.301)';
descricao.style.borderRadius = '10px';
descricao.style.padding = '5px';
descricao.style.height = '250px';
descricao.style.width = '300px';
descricao.style.display = 'none';
descricao.style.alignItems = 'center';

newP.style.color = 'white';
newP.style.fontSize = '25px';
newP.style.fontFamily = 'sans-serif';
newP.style.fontWeight = 'bold';
newP.style.textAlign = 'center';

planets.forEach(
    function addPlanet(element) {
        select.insertAdjacentHTML("beforeend", `<option value = ${element}>${element.toUpperCase()}</option>`)
    }
)

bttn.addEventListener('click', () => {
    switch (select.value) {
        case 'jupiter':
            img.setAttribute('src', './Imagens/jupiter.png')
            gravidade = 2.64
            calc(mass.value, gravidade)
            break;
    
        case 'marte':
            img.setAttribute('src', './Imagens/mars.png')
            gravidade = -2.63
            calc(mass.value, gravidade)
            break;
        
        case 'mercurio':
            img.setAttribute('src', './Imagens/mercury.png')
            gravidade = -2.70
            calc(mass.value, gravidade)
            break;

        case 'lua':
            img.setAttribute('src', './Imagens/moon.png')
            gravidade = -6
            calc(mass.value, gravidade)
            break;

        case 'netuno':
            img.setAttribute('src', './Imagens/neptune.png')
            gravidade = 1.18
            calc(mass.value, gravidade)
            break;

        case 'plutao':
            img.setAttribute('src', './Imagens/pluto.png')
            gravidade = -9.09
            calc(mass.value, gravidade)
            break;

        case 'saturno':
            img.setAttribute('src', './Imagens/saturn.png')
            gravidade = 1.15
            calc(mass.value, gravidade)
            break;

        case 'urano':
            img.setAttribute('src', './Imagens/uranus.png')
            gravidade = 1.17
            calc(mass.value, gravidade)
            break;
    
        case 'venus':
            img.setAttribute('src', './Imagens/venus.png')
            gravidade = -1.13
            calc(mass.value, gravidade)
            break;

        case 'terra':
            img.setAttribute('src', './Imagens/earth.png')
            gravidade = 1
            calc(mass.value, gravidade)
            break;
            
        case 'nenhum':
            alert('Insira um planeta válido')
            break;
            
        default:
            img.setAttribute('src', './Imagens/earth.png')
            break;
    }
})

function calc(mass, gravidade) {
    if (gravidade < 0) {
        gravidade = -1 * gravidade;
        peso = mass / gravidade;
    } else {
        peso = mass * gravidade;
    }
    peso = peso.toFixed(2);
    descricao.style.display = 'flex';
    newP.textContent = `O peso de um objeto na/em ${select.value.toUpperCase()} é de ${peso} N`;
    descricao.append(newP);
}