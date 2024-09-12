import winston from 'winston';

// Define the log levels and corresponding colors
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  verbose: 'cyan',
  debug: 'blue',
  silly: 'grey'
};

// Add colors to Winston
winston.addColors(colors);

export function getLogger(name: string) {
  return winston.createLogger({
    level: process.env.LOG_LEVEL || 'info', // Dynamic log level based on environment
    levels,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.errors({ stack: true }), // Capture stack traces for errors
      winston.format.splat(),
      winston.format.printf(({ level, message, timestamp, stack }) => {
        // Custom log format
        return stack
          ? `${timestamp} [${name}] ${level}: ${message}\n${stack}`
          : `${timestamp} [${name}] ${level}: ${message}`;
      })
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
      new winston.transports.File({
        filename: 'logs/application.log',
        level: 'info',
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        format: winston.format.json(),
      }),
    ],
  });
}
