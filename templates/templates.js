const fs = require('fs')
defaultVars = require('../helpers/getVariables').defaultVars

const returnTemplate = (templateName, company, logo, illustration, mainColor,lightGrey, grey, darkGrey) => {
    const variables = {
        templateName: templateName,
        company: company ? company : defaultVars.company, 
        logo: logo ? logo : `${defaultVars.baseUrl}/img/icon.png`,
        illustration: `${defaultVars.baseUrl}/img/illustration.png`,
        mainColor: mainColor ? mainColor : defaultVars.mainColor,
        lightGrey: lightGrey ? lightGrey : defaultVars.lightGrey,
        grey: grey ? grey : defaultVars.grey,
        darkGrey: darkGrey ? darkGrey : defaultVars.darkGrey
    }

    const welcome = `<mjml>
    <mj-head>
        <mj-title>${variables.company}'s welcome email</mj-title>
        <mj-attributes>
            <mj-all 
                padding="0"
                font-family="Helvetica Neue" />
            <mj-text 
                color="${variables.grey}"
                align="center" />
            <mj-class name="logo"
                width="72px"
                src="${variables.logo}"
                padding="30px" />
            <mj-class 
                name="body-bg" 
                background-color="#F7F7F7" />
            <mj-class 
                name="container" 
                background-color="#FFFFFF" 
                border="1px solid ${variables.lightGrey}" />
            <mj-class 
                name="title" 
                font-size="24px" 
                font-weight="bold"
                line-height="28px"
                padding="30px" />
            <mj-class 
                name="illustration" 
                src="${variables.illustration}"
                width="100px" />
            <mj-class 
                name="paragraph"
                padding="40px" />
            <mj-class 
                name="button"
                background-color="${variables.mainColor}" />
        </mj-attributes>
    </mj-head>
    <mj-body>
        <mj-container mj-class="body-bg">
            <mj-section mj-class="body-bg">
                <mj-column>
                    <mj-image mj-class="logo" /> 
                </mj-column>
            </mj-section>
            <mj-wrapper padding="0 40px">
                <mj-section mj-class="container">
                    <mj-column width="90%">
                        <mj-text mj-class="title">
                            You're in!
                        </mj-text>
                        <mj-image mj-class="illustration" />
                        <mj-text mj-class="paragraph">We're so glad you joined us on ${variables.company}. Please confirm your account by clicking on the email below.</mj-text>
                        <mj-button mj-class="button">Confirm my email</mj-button>
                        <mj-text mj-class="paragraph" align="left">Here are the next steps to get you started on the right foot:
                        <br />
                        - Step 1
                        <br />
                        - Step 2 
                        <br />
                        - Step 3
                        </mj-text>                    
                    </mj-column>
                </mj-section>
            </mj-wrapper>
            <mj-section padding="20px 0">
                <mj-column>
                    <mj-text padding="0" >Follow us</mj-text>
                    <mj-social icon-size="20px" text-mode="false" padding="0px" display="facebook twitter linkedin" mode="horizontal" border-radius="50px" background-color="#999" facebook-icon-color="${variables.darkGrey}" twitter-icon-color="${variables.darkGrey}" linkedin-icon-color="${variables.darkGrey}" />
                    <mj-text padding-bottom="20px">Designed with &lt;3</mj-text> 
                </mj-column>
            </mj-section>
        </mj-container>
    </mj-body>
    </mjml>`

    const password = `<mjml>
    <mj-head>
        <mj-title>${variables.company}'s welcome email</mj-title>
        <mj-attributes>
            <mj-all 
                padding="0"
                font-family="Helvetica Neue" />
            <mj-text 
                color="${variables.grey}"
                align="center" />
            <mj-class name="logo"
                width="72px"
                src="${variables.logo}"
                padding="30px" />
            <mj-class 
                name="body-bg" 
                background-color="#F7F7F7" />
            <mj-class 
                name="container" 
                background-color="#FFFFFF" 
                border="1px solid ${variables.lightGrey}" />
            <mj-class 
                name="title" 
                font-size="24px" 
                font-weight="bold"
                line-height="28px"
                padding="30px" />
            <mj-class 
                name="illustration" 
                src="${variables.illustration}"
                width="100px" />
            <mj-class 
                name="paragraph"
                padding="40px" />
            <mj-class 
                name="button"
                background-color="${variables.mainColor}" />
        </mj-attributes>
    </mj-head>
    <mj-body>
        <mj-container mj-class="body-bg">
            <mj-section mj-class="body-bg">
                <mj-column>
                    <mj-image mj-class="logo" /> 
                </mj-column>
            </mj-section>
            <mj-wrapper padding="0 40px">
                <mj-section mj-class="container">
                    <mj-column width="90%">
                        <mj-text mj-class="title">
                            You're in!
                        </mj-text>
                        <mj-image mj-class="illustration" />
                        <mj-text mj-class="paragraph">We're so glad you joined us on ${variables.company}'s Password. Please confirm your account by clicking on the email below.</mj-text>
                        <mj-button mj-class="button">Confirm my email</mj-button>
                        <mj-text mj-class="paragraph" align="left">Here are the next steps to get you started on the right foot:
                        <br />
                        - Step 1
                        <br />
                        - Step 2 
                        <br />
                        - Step 3
                        </mj-text>                    
                    </mj-column>
                </mj-section>
            </mj-wrapper>
            <mj-section padding="20px 0">
                <mj-column>
                    <mj-text padding="0" >Follow us</mj-text>
                    <mj-social icon-size="20px" text-mode="false" padding="0px" display="facebook twitter linkedin" mode="horizontal" border-radius="50px" background-color="#999" facebook-icon-color="${variables.darkGrey}" twitter-icon-color="${variables.darkGrey}" linkedin-icon-color="${variables.darkGrey}" />
                    <mj-text padding-bottom="20px">Designed with &lt;3</mj-text> 
                </mj-column>
            </mj-section>
        </mj-container>
    </mj-body>
    </mjml>`

    const templates = {
        welcome: welcome,
        password: password
    }

    return templates[templateName]
}

module.exports = {
    returnTemplate
}