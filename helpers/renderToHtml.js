const mjml2html = require('mjml').mjml2html

const renderToHtml = (mjml) => {
    return mjml2html(mjml).html
}

module.exports = {
    renderToHtml
}