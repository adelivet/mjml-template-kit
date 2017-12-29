const renderToHtml = require('./renderToHtml').renderToHtml
const renderToMjml = require('./renderToMjml').renderToMjml

const renderAll = variables => {
    const welcomeMjml = renderToMjml("welcome", variables)
    const welcomeHtml = renderToHtml(welcomeMjml)

    const passwordMjml = renderToMjml("password", variables)
    const passwordHtml = renderToHtml(passwordMjml)

    return {
        welcome: welcomeHtml,
        password: passwordHtml
    }
}

module.exports = {
    renderAll
}