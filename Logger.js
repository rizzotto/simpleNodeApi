const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'info.log',
            level: 'info',
            maxFiles:'30d',
        })
    ]
})

module.exports = logger;
