const alarms = process.argv.slice(2);
console.log(alarms);
alarms.forEach((el) => {
  if(typeof(Number(el)) === 'number' && Number(el) > 0) {
    let delayTime = Number(el) * 1000
    console.log(el);
    setTimeout(function() {
      process.stdout.write('\x07');
    }, delayTime);
  }
});