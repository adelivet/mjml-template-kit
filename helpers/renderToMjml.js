const pug = require('pug')
const fs = require('fs')
const url = 'http://mjml-ready.herokuapp.com'

const defaultVars = {
    company: '{Company Name}',
    logo: `${url}/img/mjml.png`,
    illustration: `${url}/img/illustration.png`, 
    mainColor: '#f45e46',
    lightGrey: '#dddddd',
    grey: '#777777',
    darkGrey: '#444444'
}

const renderToMjml = (templateName, opts) => {
    
    let variables = Object.assign({}, defaultVars, opts)

    if (!fs.existsSync(`./templates/${templateName}.pug`)) {
        throw new Error(`invalid template name: "${templateName}"`)
    }

    return pug.renderFile(`./templates/${templateName}.pug`, {variables})
}

module.exports = {
    renderToMjml
}