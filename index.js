// Question: How could you set a prefix before everything you log? for example, if you log('my message') it will log: "(app) my message"
function log() {
    let args = [...arguments];
    args.unshift('(app)');
    console.log(...args);
}

log('MAMA');
