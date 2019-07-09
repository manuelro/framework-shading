import Vue from 'vue/dist/vue'

export default config => {
  const vm = new Vue({
    el: `#${config.node}`,
    data: () => config.model,
    render: h => h(config.view)
  })
}
