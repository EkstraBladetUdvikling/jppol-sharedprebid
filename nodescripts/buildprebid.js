const uglifier = require('./packprebid');
const updatePrebid = require('./updateprebid');
const movePrebid = require('./moveprebid');

const runtimeArguments = process.argv.slice(2);

const noRubiconArg = runtimeArguments.find(
  (val) => val.indexOf('norubicon') !== -1
);
const noRubicon = !!noRubiconArg;

const versionArg = runtimeArguments.find(
  (val) => val.indexOf('version=') !== -1
);
const version = versionArg ? versionArg.split('=')[1] : null;

const modulesArg = runtimeArguments.find(
  (val) => val.indexOf('modules') !== -1
);
const modules = modulesArg
  ? modulesArg.split('modules=')[1].trim().split(',')
  : null;

if (version) {
  updatePrebid(version, noRubicon, modules);
}

const envArg = runtimeArguments.find((val) => val.indexOf('env=') !== -1);
const env = envArg ? envArg.split('=')[1] : null;

if (env) {
  uglifier(env, noRubicon);
}

const moveArg = runtimeArguments.find((val) => val.indexOf('--move') !== -1);
const move = !!moveArg;

if (move) {
  movePrebid();
}
