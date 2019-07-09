import adapters from '../adapters'

export default class Pool {
  static apps = []

  static add(appType, config){
    Pool.apps.push({ adapter: adapters[appType], config })
  }

  static addReact(config){
    Pool.add('react', config)
  }

  static addVue(config){
    Pool.add('vue', config)
  }

  static addAngular(config){
    Pool.add('angular', config)
  }

  static start(){
    for (let app of Pool.apps) {
      app.adapter(app.config)
    }
  }
}
