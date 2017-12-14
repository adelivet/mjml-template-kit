const mjml = require('mjml')
const fs = require('fs')
const templates = require('../templates/templates')

for (template in templates) {
    console.log(template)
}

//fs.writeFileSync('template.html', (mjml.mjml2html(template.welcome).html))
//fs.writeFileSync('welcome.html', (mjml.mjml2html(template.password).html))