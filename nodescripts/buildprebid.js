const uglifier = require('./packprebid');
const updatePrebid = require('./updateprebid');

const runtimeArguments = process.argv.slice(2);

const envArg = runtimeArguments.find((val) => val.indexOf('env=') !== -1);
const versionArg = runtimeArguments.find(
  (val) => val.indexOf('version=') !== -1
);

const noRubiconArg = runtimeArguments.find(
  (val) => val.indexOf('norubicon') !== -1
);

const env = envArg.split('=')[1];

const version = versionArg ? versionArg.split('=')[1] : null;

const noRubicon = !!noRubiconArg;

if (version) {
  updatePrebid(version, noRubicon);
}

uglifier(env, noRubicon);
