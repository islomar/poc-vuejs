import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import ClickMeButton from '@/components/ClickMeButton'

describe('HelloWorld.vue', () => {
  let vm

  beforeEach(function () {
    const Constructor = Vue.extend(HelloWorld)
    vm = new Constructor().$mount()
  })

  it('should check that msg is Welcome to Your Vue.js App', () => {
    expect(vm.$data.msg).to.equal('Welcome to Your Vue.js App')
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
})
