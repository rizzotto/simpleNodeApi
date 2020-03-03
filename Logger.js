const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'info.log',
            level: 'info',
            maxFiles:'2d',
        })
    ]
})

module.exports = logger;