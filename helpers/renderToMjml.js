const pug = require('pug')
const fs = require('fs')
const path = require('path')

const defaultVars = {
    company: '{Company Name}',
    logo: path.resolve('./public/img/mjml.png'),
    illustration: path.resolve('./public/img/illustration.png'), 
    mainColor: '#f45e46',
    lightGrey: '#dddddd',
    grey: '#777777',
    darkGrey: '#444444'
}

const renderToMjml = (templateName, opts) => {
    
    let variables = Object.assign({}, defaultVars, opts)

    console.log(variables.logo)
    if (!fs.existsSync(`./templates/${templateName}.pug`)) {
        throw new Error(`invalid template name: "${templateName}"`)
    }

    return pug.renderFile(`./templates/${templateName}.pug`, {variables})
}

module.exports = {
    renderToMjml
}