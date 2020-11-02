const cpx = require('cpx');

const movePrebid = () => {
  const source = './jppol/**/*.{css,js,html}';
  const dest =
    '../ekstrabladet/ekstrabladet-publication/src/main/webapp/assets/prebid';
  cpx.copy(source, dest, (err) => {
    if (err) {
      console.log('err', err);
      process.exit(1);
    }
  });
};

module.exports = movePrebid;
