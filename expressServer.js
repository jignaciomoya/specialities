const express = require ('express');
const app = express();
const {sortedSpecialities, showUserDataBySpecialty} = require('./app.js');
console.log(sortedSpecialities.qa, sortedSpecialities.qa.length);
app.get('/',(req, res) => {
    res.send(
        `<nav>
        <ul>
            <li><a href="/developers">Developers</a></li>
            <li><a href="/marketing">Marketing</a></li>
            <li><a href="/QAs">QAs</a></li>
            <li><a href="/ventas">Ventas</a></li>
        </ul>
    </nav>`
    );
});
app.get('/developers', (req, res) => {
    res.send(`<h1> Lista de developers:</h1> 
    <br/>
     <a href = '/'> Inicio </a>
     <br/> 
${sortedSpecialities.developers.length} 
<br/>
Developers: ${showUserDataBySpecialty('developers')}
     `);
});
app.get('/marketing', (req, res) => {
    res.send(`<h1> Lista de marketing:</h1>
    <br/> 
    <a href = '/'> Inicio </a>
    <br/> 
    ${sortedSpecialities.marketing.length}
    <br/>
    Marketing: ${showUserDataBySpecialty('marketing')}
    `);
});
app.get('/QAs', (req, res) => {
    res.send(`<h1> Lista de QAs:</h1>
    <br/> 
    <a href = '/'> Inicio </a>
    <br/> 
    ${sortedSpecialities.qa.length}
    <br/>
    QAs: ${showUserDataBySpecialty('qa')}
    `);
});
app.get('/ventas', (req, res) => {
    res.send(`<h1> Lista de ventas:</h1>
    <br/> 
    <a href = '/'> Inicio </a>
    <br/> 
    ${sortedSpecialities.ventas.length}
    <br/>
    Ventas: ${showUserDataBySpecialty('ventas')}
    `);
});
app.use((req, res) => {
    res.status(404).send(`<h1> Pagina no encontada</h1>
    <a href = '/'> Inicio </a>`);
});

app.listen (3000, () => {
    console.log('Node.js escuchando en el servidor 3000')
})