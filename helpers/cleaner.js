const fs = require('fs')

const cleanZips = _ => {
    fs.readdir('./public/downloads', (err, files) => {
        files.forEach(file => {
            if (file != 'mjml-templates.zip') {
                if ((Date.now() - file.split('.')[0]) / 1000 > 500) {
                    try {
                        fs.unlinkSync(`./public/downloads/${file}`);
                      } catch (err) {
                        console.log(`error deleting ${file}: ${err}`)
                      }
                }
            }
        })
      })
}

module.exports = {
    cleanZips
}