import adapters from '../adapters'

export default class Pool {
  static apps = []

  static add(appType, config){
    Pool.apps.push({ adapter: adapters[appType], config })
  }

  static addReact(config){
    Pool.apps.push({ adapter: adapters['react'], config })
  }

  static addVue(config){
    Pool.apps.push({ adapter: adapters['vue'], config })
  }

  static start(){
    for (let app of Pool.apps) {
      app.adapter(app.config)
    }
  }
}
