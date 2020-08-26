const exec = require('child_process').exec;

const updatePrebid = (version, norubicon) => {
  if (!version) {
    console.error('Version missing, nothing to download');
    process.exit(1);
  }

  const outputFile = norubicon
    ? './prebid/prebid-norubicon.js'
    : './prebid/prebid.js';

  const newVersion = `curl 'https://js-download.prebid.org/download'   -H 'authority: js-download.prebid.org'   -H 'pragma: no-cache'   -H 'cache-control: no-cache'   -H 'accept: */*'   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'   -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8'   -H 'origin: http://prebid.org'   -H 'sec-fetch-site: cross-site'   -H 'sec-fetch-mode: cors'   -H 'sec-fetch-dest: empty'   -H 'referer: http://prebid.org/download.html'   -H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8,da;q=0.7'   --data-raw 'modules%5B%5D=adformBidAdapter&modules%5B%5D=appnexusBidAdapter&modules%5B%5D=criteoBidAdapter&modules%5B%5D=pubmaticBidAdapter&modules%5B%5D=rubiconBidAdapter&modules%5B%5D=consentManagement&modules%5B%5D=gdprEnforcement&version=${version}'   --compressed -o ${outputFile}`;
  const newVersionNoRubicon = `curl 'https://js-download.prebid.org/download'   -H 'authority: js-download.prebid.org'   -H 'pragma: no-cache'   -H 'cache-control: no-cache'   -H 'accept: */*'   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'   -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8'   -H 'origin: http://prebid.org'   -H 'sec-fetch-site: cross-site'   -H 'sec-fetch-mode: cors'   -H 'sec-fetch-dest: empty'   -H 'referer: http://prebid.org/download.html'   -H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8,da;q=0.7'   --data-raw 'modules%5B%5D=adformBidAdapter&modules%5B%5D=appnexusBidAdapter&modules%5B%5D=criteoBidAdapter&modules%5B%5D=pubmaticBidAdapter&modules%5B%5D=consentManagement&modules%5B%5D=gdprEnforcement&version=${version}'   --compressed -o ${outputFile}`;

  const execFunc = norubicon ? newVersionNoRubicon : newVersion;

  exec(execFunc, (err) => {
    if (err) {
      // node couldn't execute the command
      console.warn(
        `node couldn't execute the command, try running tsc or tslint in folder`
      );
      console.error(err);
      process.exit(1);
    }
    console.log(`Downloaded version ${version} to ${outputFile}`);
  });
};

module.exports = updatePrebid;
