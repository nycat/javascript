const log = {}

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
}
console.log(log.levels.DEBUG, 'debug message')
console.log(log.levels.INFO, 'info message')
