const fs = require('fs');
const cheerio = require('cheerio');

try {
    const html = fs.readFileSync('index.html', 'utf8');
    const $ = cheerio.load(html);
    const h1Text = $('h1').text().trim();

    if (h1Text === 'Olá Mundo') {
        console.log('✅ Passou: H1 encontrado corretamente.');
        process.exit(0); // Sucesso (Verde)
    } else {
        console.log(`❌ Erro: Esperado "Olá Mundo", encontrado "${h1Text}"`);
        process.exit(1); // Falha (Vermelho)
    }
} catch (e) {
    console.log('❌ Erro: Arquivo index.html não encontrado.');
    process.exit(1);
}
