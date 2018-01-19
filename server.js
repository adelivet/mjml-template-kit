const express = require('express')
const app = express()
const favicon = require('serve-favicon')
const path = require('path')
const port = process.env.PORT || 3030
const renderToHtml = require('./helpers/renderToHtml').renderToHtml
const renderToMjml = require('./helpers/renderToMjml').renderToMjml
const renderAll = require('./helpers/renderAll').renderAll
const cleanZips = require('./helpers/cleaner').cleanZips

app
    .use(express.static(path.join(__dirname, 'public')))
    .use(favicon(path.join(__dirname,'public','img','favicon.ico')))
    .set('view engine', 'pug')

app.get('/', (req, res) => {
    cleanZips()
    res.render('index')
})

app.get('/templates', (req, res) => {
    let variables = {}

    for (param in req.query) {
        if (req.query[param]) {
            variables[param] = req.query[param]
        }
    }

    const templates = renderAll(variables)

    res.render('templates', {
        company: variables.company ? variables.company : '{Company Name}',
        zip: templates.zip,
        template_1: templates.welcome,
        template_2: templates.password,
        template_3: templates.welcome
    })
})

app.get('/random', (req, res) => {

    const spotify = {
        company: 'Spotify',
        logo: `${(path.join(__dirname, 'public'))}/img/brands/spotify.png`,
        mainColor: '#1DB954',
    }

    const facebook = {
        company: 'Facebook',
        logo: `${(path.join(__dirname, 'public'))}/img/brands/facebook.png`,
        mainColor: '#3C5A96',
    }

    const slack = {
        company: 'Slack',
        logo: `${(path.join(__dirname, 'public'))}/img/brands/slack.png`,
        mainColor: '#33B17C',
    }

    const brands = [spotify, facebook, slack]
    const pickBrand = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const brand = brands[pickBrand(0, brands.length)]

    const templates = renderAll(brand)

    res.render('templates', {
        company: brand.company ? brand.company : '{Company Name}',
        zip: templates.zip,
        template_1: templates.welcome,
        template_2: templates.password,
        template_3: templates.welcome
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})