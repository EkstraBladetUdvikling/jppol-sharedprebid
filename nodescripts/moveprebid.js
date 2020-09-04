const cpx = require('cpx');

const movePrebid = () => {
  const source = './jppol/**/*.{css,js}';
  const dest =
    '../ekstrabladet/ekstrabladet-publication/src/main/webapp/assets/prebid-v4';
  cpx.copy(source, dest, err => {
    if (err){
    console.log('err', err);
    process.exit(1)
  }

  });
};

module.exports = movePrebid;
