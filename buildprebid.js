const childProcess = require('child_process');
const fs = require('fs');
const process = require('process');
const promisify = require('util').promisify;
const copyPromise = promisify(fs.copyFile);
const execPromise = promisify(childProcess.exec);
const startTime = new Date().getTime();
const runtimeArguments = process.argv.slice(2);

function checkArgument(checkValue) {
  let returnValue;
  if (runtimeArguments.length > 0) {
    returnValue = runtimeArguments.indexOf(checkValue) !== -1;
  } else {
    returnValue = true;
  }
  return returnValue;
}

(async function prebidBuild() {
  try {
    process.chdir('./node_modules/prebid.js');
    console.log(`Running commands from: ${process.cwd()}`);
    if (checkArgument('--install')) {
      console.log(`Installing prebid.js dependencies`);
      const installStatus = await execPromise('npm install');
      if (!installStatus) {
        throw Error('Error installing');
      }
      console.log(installStatus.stdout);
    }
    if (checkArgument('--build')) {
      console.log(`Building prebid.js with modules from bidderAdapter.json`);
      const buildStatus = await execPromise(
        '"node_modules/.bin/gulp" build --modules=../../bidderAdapters.json'
      );
      if (!buildStatus) {
        throw Error('Error building');
      }
      console.log(buildStatus.stdout);
    }
    if (checkArgument('--copy')) {
      console.log('Copying prebid.js');
      process.chdir('../..');

      const originalFile = `./node_modules/prebid.js/build/dist/prebid.js`;
      const newFile = `./prebid/prebid.js`;
      const input = fs.readFileSync(originalFile);
      fs.writeFileSync(newFile, input);
      console.log(`Copied ${originalFile} copied to ${newFile}`);
    }
    const endTime = new Date().getTime();
    console.log(`All done in: ${((endTime - startTime) / 1000).toFixed(2)}s`);
    process.exit(0);
  } catch (err) {
    console.error(`Prebid builder error: ${err}`);
    process.exit(1);
  }
})();
