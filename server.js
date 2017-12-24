const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3030

const renderToHtml = require('./helpers/renderToHtml').renderToHtml
const renderToMjml = require('./helpers/renderToMjml').renderToMjml

app
    .use(express.static(path.join(__dirname, 'public')))
    .set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/templates', (req, res) => {
    let variables = {}

    for (param in req.query) {
        if (req.query[param]) {
            variables[param] = req.query[param]
        }
    }

    const welcomeMjml = renderToMjml("welcome", variables)
    const welcomeHtml = renderToHtml(welcomeMjml)

    res.render('templates', {
        template_1: welcomeHtml,
        template_2: welcomeHtml,
        template_3: welcomeHtml
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})