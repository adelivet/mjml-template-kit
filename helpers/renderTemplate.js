const mjml = require('mjml')
const fs = require('fs')
const templates = require('../templates/templates')

const renderOne = (templateName, company, logo, illustration, mainColor,lightGrey, grey,darkGrey) => {
    const template = templates.returnTemplate(templateName, company, logo, illustration, mainColor,lightGrey, grey,darkGrey)
    return mjml.mjml2html(template).html
}

module.exports = {
    renderOne
}