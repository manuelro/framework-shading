import home from './src/react/home'
import footer from './src/vue/footer'

import Pool from './core/pool'

Pool.addReact(home)
Pool.addVue(footer)

Pool.start()
