import home from './src/react/home'
import footer from './src/vue/footer'
import sidebar from './src/angular/sidebar'

import Pool from './core/pool'

Pool.addReact(home)
Pool.addVue(footer)
Pool.addAngular(sidebar)

Pool.start()
