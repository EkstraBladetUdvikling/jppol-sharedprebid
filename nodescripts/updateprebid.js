const fs = require('fs');
const exec = require('child_process').exec;

let modules = [
  'adformBidAdapter',
  'appnexusBidAdapter',
  'criteoBidAdapter',
  'pubmaticBidAdapter',
  'consentManagement',
  'gdprEnforcement',
];

const updatePrebid = (updateOptions) => {
  const { addModules, suffix, version } = updateOptions;

  if (!version) {
    console.error('Version missing, nothing to download');
    process.exit(1);
  }

  if (addModules) {
    modules = [...modules, ...addModules];
  }

  const modulesString = `modules%5B%5D=${modules.join('&modules%5B%5D=')}`;

  const dataRaw = `${modulesString}&version=${version}`;

  const outputFile = `./prebid/prebid${suffix ?? ''}.js`;

  console.log(outputFile);

  if (fs.existsSync(outputFile))
    fs.copyFileSync(outputFile, outputFile.replace('.js', '-prev.js'));

  const newVersion = `curl 'https://js-download.prebid.org/download'   -H 'authority: js-download.prebid.org'   -H 'pragma: no-cache'   -H 'cache-control: no-cache'   -H 'accept: */*'   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'   -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8'   -H 'origin: http://prebid.org'   -H 'sec-fetch-site: cross-site'   -H 'sec-fetch-mode: cors'   -H 'sec-fetch-dest: empty'   -H 'referer: http://prebid.org/download.html'   -H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8,da;q=0.7'   --data-raw '${dataRaw}'   --compressed -o ${outputFile}`;
  return new Promise((resolve, reject) => {
    exec(newVersion, (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        console.warn(
          `node couldn't execute the command, try running tsc or tslint in folder`
        );
        console.error(err);
        process.exit(1);
      }
      console.log(`Downloaded version ${version} to ${outputFile}`);
      resolve(stdout ? stdout : stderr);
    });
  });
};

module.exports = updatePrebid;
