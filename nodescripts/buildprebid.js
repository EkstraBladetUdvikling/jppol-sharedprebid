const uglifier = require('./packprebid');
const updatePrebid = require('./updateprebid');
const movePrebid = require('./moveprebid');

const buildPrebid = async () => {
  const runtimeArguments = process.argv.slice(2);
  console.log('runtimeArguments', runtimeArguments);

  const noRubiconArg = runtimeArguments.find(
    val => val.indexOf('norubicon') !== -1
  );
  const noRubicon = !!noRubiconArg;

  const suffixArg = runtimeArguments.find(
    val => val.indexOf('--suffix=') !== -1
  );
  const suffix = suffixArg ? `-${suffixArg.split('=')[1]}` : noRubicon ? '-norubicon' : null;

  const versionArg = runtimeArguments.find(
    val => val.indexOf('version=') !== -1
  );
  const version = versionArg ? versionArg.split('=')[1] : null;

  const modulesArg = runtimeArguments.find(
    val => val.indexOf('modules') !== -1
  );
  const addModules = modulesArg
    ? modulesArg
        .split('modules=')[1]
        .trim()
        .split(',')
    : null;

  if (version) {
    await updatePrebid({
      addModules,
      noRubicon,
      suffix,
      version
    });
  }

  const envArg = runtimeArguments.find(val => val.indexOf('env=') !== -1);
  const env = envArg ? envArg.split('=')[1] : null;

  if (env) {
    if (env === 'all') {
      ['dev', 'prod'].forEach(arrEnv => {
        uglifier({
          env: arrEnv,
          noRubicon,
          suffix
        });
      });
    } else {
      uglifier({
        env,
        noRubicon,
        suffix
      });
    }
  }

  const moveArg = runtimeArguments.find(val => val.indexOf('--move') !== -1);
  const move = !!moveArg;

  if (move) {
    movePrebid();
  }
};

buildPrebid();
