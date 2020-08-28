const uglifier = require('./packprebid');
const updatePrebid = require('./updateprebid');

const runtimeArguments = process.argv.slice(2);

const envArg = runtimeArguments.find((val) => val.indexOf('env=') !== -1);
const env = envArg ? envArg.split('=')[1] : null;

const versionArg = runtimeArguments.find(
  (val) => val.indexOf('version=') !== -1
);
const version = versionArg ? versionArg.split('=')[1] : null;

const noRubiconArg = runtimeArguments.find(
  (val) => val.indexOf('norubicon') !== -1
);
const noRubicon = !!noRubiconArg;

const modulesArg = runtimeArguments.find(
  (val) => val.indexOf('modules') !== -1
);
const modules = modulesArg
  ? modulesArg.split('modules=')[1].trim().split(',')
  : null;

if (version) {
  updatePrebid(version, noRubicon, modules);
}

if (env) {
  uglifier(env, noRubicon);
}
