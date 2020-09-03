const fs = require('fs');
const UglifyJS = require('uglify-js');

/**
 * uglifier
 * @param { string } env
 */
const uglifier = (env, norubicon) => {
  try {
    const prebidFile = norubicon
      ? 'prebid/prebid-norubicon.js'
      : 'prebid/prebid.js';

    const files = [
      fs.readFileSync(prebidFile, 'utf8'),
      fs.readFileSync('tspublic/index.js', 'utf8'),
    ];

    const config = env ?? 'dev';
    const outputPath = env === 'prod' ? 'min' : 'dev';

    const outputFileName = norubicon
      ? `jppol/jppol-prebid-norubicon.${outputPath}.js`
      : `jppol/jppol-prebid.${outputPath}.js`;

    const uglifierConfig = require(`../uglify.${config}.config.json`);
    const outputFile = UglifyJS.minify(files.join(''), uglifierConfig).code;

    fs.writeFileSync(outputFileName, outputFile);
    console.log(`${outputFileName} written`);
  } catch (err) {
    console.error('uglifier error', err.message);
    process.exit(1);
  }
};

module.exports = uglifier;
