import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import ClickMeButton from '@/components/ClickMeButton'
import VueResource from 'vue-resource'

Vue.use(VueResource)

describe('HelloWorld.vue', () => {
  let vm

  beforeEach(function () {
    const Constructor = Vue.extend(HelloWorld)
    vm = new Constructor().$mount()
  })

  it('should check that msg is Welcome to Your Vue.js App', () => {
    expect(vm.$data.msg).to.equal('Welcome to Your Vue.js App')
  })

  it('should show all the links', () => {
    expect(vm.$el.querySelectorAll('a').length)
    .to.equal(9)
  })

  // Another solution is to directly provide the variable to the test constructor.
  it('should render correct contents', () => {
    const data = {
      data: {
        msg: 'plop'
      }
    }
    const Constructor = Vue.extend(HelloWorld)
    vm = new Constructor(data).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('plop')
  })

  it('should create a counter with zero value', () => {
    expect(vm.$data.counter).to.equal(0)
  })

  it('should render counter with counter data value', () => {
    // Given
    const data = {
      data: {
        counter: 48
      }
    }
    const Constructor = Vue.extend(HelloWorld)

    // When
    vm = new Constructor(data).$mount()

    // Then
    expect(vm.$el.querySelector('.hello div.counter').textContent)
      .to.equal('48')
  })

  // $options returns all options necessary to the instantiation of the vue, such as its name, its methods, its directives or its components.
  it('should check the name of my vue', () => {
    expect(vm.$options.name).to.equal('HelloWorld')
  })

  it('should include a clickMeButton', () => {
    const clickMeButton = vm.$options.components.ClickMeButton
    expect(clickMeButton).to.contain(ClickMeButton)
  })

  it('should define a message to put inside the clickMeButton', () => {
    expect(vm.$options.components.ClickMeButton.props).to.haveOwnProperty('message')
  })

  it('should verify textContent of the Click Me Button', () => {
    expect(vm.$el.querySelector('.clickMeButton button').textContent)
    .to.equal('Increment counter')
  })

  describe('incrementCounter', function () {
    it('should increment the counter to 1', () => {
      // When
      vm.incrementCounter()

      // Then
      expect(vm.$data.counter).to.equal(1)
    })
  })

  it('should increment counter when button from ClickMeButton is clicked', () => {
    // given
    let button = vm.$el.querySelector('.clickMeButton button')

    // when
    button.click()

    // then
    expect(vm.$data.counter).to.equal(1)
  })

  describe('incrementFromTheDice()', () => {
    it('should call api to get the dice number', () => {
      // given
      sinon.stub(Vue.http, 'get').returnsPromise()

      // construct vue
      const Constructor = Vue.extend(HelloWorld)
      const vm = new Constructor().$mount()

      // when
      vm.incrementFromTheDice()

      // then
      expect(Vue.http.get).to.have.been.calledWith('http://setgetgo.com/rollthedice/get.php')

      // after
      Vue.http.get.restore()
    })
  })

  it('should call increment counter from API answer', () => {
    // given
    const promiseCall = sinon.stub(Vue.http, 'get').returnsPromise()
    promiseCall.resolves({ body: '5' })

    // construct vue
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor({ data: { counter: 6 } }).$mount()

    // when
    vm.incrementFromTheDice()

    // then
    expect(vm.$data.counter).to.equal(11)

    // after
    Vue.http.get.restore()
  })

  it('should reinit counter when api rejects error', () => {
    // given
    const promiseCall = sinon.stub(Vue.http, 'get').returnsPromise()
    promiseCall.rejects()

    // construct vue
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor({ data: { counter: 6 } }).$mount()

    // when
    vm.incrementFromTheDice()

    // then
    expect(vm.$data.counter).to.equal(0)

    // after
    Vue.http.get.restore()
  })

  it('should incrementFromTheDice when button roll-the-dice is clicked', () => {
    // given
    let button = vm.$el.querySelector('button.roll-the-dice')
    const promiseCall = sinon.stub(Vue.http, 'get').returnsPromise()
    promiseCall.resolves({ body: '5' })

    // when
    button.click()

    // then
    expect(vm.$data.counter).to.equal(5)

    // after
    Vue.http.get.restore()
  })
})
