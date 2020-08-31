const cpx = require('cpx');

const movePrebid = () => {
  const source = './jppol/**/*.{css,js}';
  const dest =
    '../ekstrabladet/ekstrabladet-publication/src/main/webapp/assets/prebid-v4';
  cpx.copy(source, dest, (err) => {
    console.log('err', err);
  });
};

module.exports = movePrebid;
