let aze = prompt('meblegi yazin')
let usd = aze / 1.7
let eur = aze / 1.8510
let tl = aze / 0.06523
let rus = aze / 0.01861

document.getElementById('ramo').innerHTML = aze + ' azn = ' + usd.toFixed() + ' dollar';
document.getElementById('ss').innerHTML = aze + ' azn = ' + eur.toFixed() + ' euro';
document.getElementById('cc').innerHTML = aze + ' azn = ' + tl.toFixed() + ' tl';
document.getElementById('aa').innerHTML = aze + ' azn = ' + rus.toFixed() + ' rubl';