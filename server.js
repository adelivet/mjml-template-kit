const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3030

const renderTemplate = require('./helpers/renderTemplate')

app
    .use(express.static(path.join(__dirname, 'public')))
    .set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/templates', (req, res) => {
    const variables = {
        company: req.query.company, 
        logo: req.query.logo,
        illustration: `http://localhost:${port}/img/illustration.png`, // hardcoded for now
        mainColor: req.query.color,
        lightGrey: req.query.lightGrey,
        grey: req.query.grey,
        darkGrey: req.query.darkGrey
    }

    const welcome = renderTemplate.renderOne("welcome", 
            variables.company, 
            variables.logo, 
            variables.illustration, 
            variables.mainColor,
            variables.lightGrey, 
            variables.grey,
            variables.darkGrey)

    const password = renderTemplate.renderOne("password", 
        variables.company, 
        variables.logo, 
        variables.illustration, 
        variables.mainColor,
        variables.lightGrey, 
        variables.grey,
        variables.darkGrey)

    res.render('templates', {
        template_1: welcome,
        template_2: password,
        template_3: welcome
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})