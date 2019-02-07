import Vue from 'vue'

export default class PageObject {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  async wait() {
    return new Promise(resolve => setImmediate(resolve))
    // return Vue.nextTick()
  }

  update() {
    return this.wrapper.update()
  }

  text() {
    return this.wrapper.text()
  }

  html() {
    return this.wrapper.html()
  }

  contains(text) {
    expect(this.text()).toContain(text)
  }

  matchSnapshot() {
    expect(this.wrapper.html()).toMatchSnapshot()
  }

  setRouterSpy(routerSpy) {
    this.wrapper.vm.jotaRouter = routerSpy
  }

  checkCurrentPath(state, path) {
    expect(this.wrapper.vm.$store.state.route.path).toBe(path)
  }
}
