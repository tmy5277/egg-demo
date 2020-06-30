const path = require('path');

// app boot
class AppBootHook {
  constructor(app) {
    this.app = app;
    app.once('server', server => {
      console.log('on server')
      // websocket
    });
    app.on('error', (err, ctx) => {
      console.log('on error')
      // report error
    });
    app.on('request', ctx => {
      console.log('on request')
      // log receive request
    });
    app.on('response', ctx => {
      console.log('on response')
      // ctx.starttime is set by framework
      const used = Date.now() - ctx.starttime;
      console.log(`${ctx.method} ${ctx.url} - used: ${used}ms`)
      // log total cost
    });
  }
  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
    console.log('configWillLoad');
  }
  configDidLoad() {
    // Config, plugin files have been loaded.
    console.log('configDidLoad');
    // this.app.logger.info('configDidLoad config: ', this.app.config)
    console.log('configDidLoad middleware: ', this.app.config.middleware)
  }
  async didLoad() {
    // All files have loaded, start plugin here.
    console.log('didLoad app:', this.app)

    // validate plugin
    const directory = path.join(this.app.config.baseDir, 'app/validate');
    this.app.loader.loadToApp(directory, 'validate');
  }
  async willReady() {
    // All plugins have started, can do some thing before app ready
    console.log('willReady');
  }
  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
    console.log('app didReady');
  }
  async serverDidReady() {
    // Server is listening.
    console.log('serverDidReady');
  }
  async beforeClose() {
    // Do some thing before app close.
    console.log('beforeClose');
  }
}
module.exports = AppBootHook;