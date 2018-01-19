const renderToHtml = require('./renderToHtml').renderToHtml
const renderToMjml = require('./renderToMjml').renderToMjml
const fs = require('fs')
const beautify = require('js-beautify').html
const JSZip = require('jszip')

const beautifyOptions = {
    indent_size: 2,
    wrap_attributes_indent_size: 2,
    max_preserve_newline: 0,
    preserve_newlines: false,
  }

const originalTemplates = ['welcome', 'password', 'welcome']

const renderAll = variables => {
    const token = Date.now()
    const zip = new JSZip()
    const templates = zip.folder('mjml-templates')
    const renderedTemplates = {}
    let mjml, html

    originalTemplates.map(e => {
        mjml = renderToMjml(e, variables)
        html = renderToHtml(mjml)
        renderedTemplates[e] = html
        templates.file(`mjml/${e}.mjml`, beautify(mjml, beautifyOptions))
        templates.file(`html/${e}.html`, beautify(html, beautifyOptions))
    })

    zip
        .generateNodeStream({type:'nodebuffer', streamFiles:true})
        .pipe(fs.createWriteStream(`./public/downloads/${token}.zip`))

    renderedTemplates.zip = `/downloads/${token}.zip`

    return renderedTemplates
}

module.exports = {
    renderAll
}