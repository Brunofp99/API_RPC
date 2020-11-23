module.exports = (app) => {
    const request = require('request');
    let date = new Date(), 
        param = '', 
        json = {}, 
        time = `${date.getHours()}:${date.getMinutes()}:${date.getMilliseconds()}+00:00`;

    app.get('/', (req, res)=>{

        request(`https://epg-api.video.globo.com/programmes/1337`, (error, response, body)=>{

            json = JSON.parse(body);
            json.programme.entries.current_time = time;

            res.marko(require('./src/view/programmes.marko'), json.programme)
        });
    });

    app.post('/', (req, res)=>{

        param = req.body.date != '' ? `/?date=${req.body.date}` : '';

        request(`https://epg-api.video.globo.com/programmes/1337${param}`, (error, response, body)=>{

            json = JSON.parse(body)
            if(param == '') json.programme.entries.current_time = time

            res.marko(require('./src/view/programmes.marko'), json.programme)
        });
    });
}