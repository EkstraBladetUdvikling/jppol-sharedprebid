const childProcess = require('child_process');
const fs = require('fs');
const process = require('process');
const promisify = require('util').promisify;
const copyPromise = promisify(fs.copyFile);
const execPromise = promisify(childProcess.exec);
const startTime = new Date().getTime();

(async function prebidBuild() {
  try {
    process.chdir('./node_modules/prebid.js');
    console.log(`Running commands from: ${process.cwd()}`);
    console.log(`Installing prebid.js dependencies`);
    const installStatus = await execPromise('npm install');
    if (!installStatus) {
      console.log('Error installing');
      process.exit(1);
    }
    console.log(installStatus.stdout);
    console.log(`Building prebid.js with modules from bidderAdapter.json`);
    const buildStatus = await execPromise(
      '"node_modules/.bin/gulp" build --modules=../../bidderAdapters.json'
    );
    if (!buildStatus) {
      console.log('Error building');
      process.exit(1);
    }
    console.log(buildStatus.stdout);
    console.log('Copying prebid.js');
    process.chdir('../..');
    const originalFile = `./node_modules/prebid.js/build/dist/prebid.js`;
    const newFile = `./prebid/prebid.js`;
    const copier = copyPromise(originalFile, newFile);
    if (!copier) {
      console.log('Error copying');
      process.exit(1);
    }
    console.log(`Copied ${originalFile} copied to ${newFile}`);
    const endTime = new Date().getTime();
    console.log(`All done in: ${((endTime - startTime) / 1000).toFixed(2)}s`);
    process.exit(0);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
})();
