const keys = require('own-enumerable-keys')

const runMany = require('./runMany')

module.exports = handleEffects

function handleEffects (effectHandlers) {
  const runs = 
  keys(effectHandlers).map((effectType) => {
    const run = effectHandlers[effectType]

    return function (effect, sources) {
      if (effect === effectType) {
        return run(effect, sources)
      }
    }
  })

  return runMany(runs)
}
