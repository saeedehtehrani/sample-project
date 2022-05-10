const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const alarmData = require('../server/data/alarms');

server.get('/api/alarms', (req, res, next) => {
    res.status(200).send(alarmData.getAlarms);
});

server.listen(3000, () => {
    console.log('JSON server listening on port 3000');
});