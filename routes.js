module.exports = (app) => {
    const request = require('request');

    app.get('/', (req, res)=>{
        //parametros da url
        // req.query.date
        let time = Date.now()
        // console.log(time) 
        //busca informações na api da rpc
        request(`https://epg-api.video.globo.com/programmes/1337/?2020-11-19`, (error, response, body)=>{
            let json = JSON.parse(body)

            json.programme.entries.current_time = time

            console.log( json.programme.entries)

            res.marko(require('./src/view/programmes.marko'), json.programme)
            // res.send( json.programme.entries.reduce((prev, curr) =>`${prev}<div>${curr.title}</div>`, `<div></div>`) )
        })

    });
}