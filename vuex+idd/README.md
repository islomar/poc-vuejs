# Tutorial about Vuex and IDD

## Vuex
* Stores
* **Mutations**
Committing mutations is the only way to actually change state in a Vuex store. Mutations are pure functions that receive the current state and an optional payload so we should be able to test them with single unit tests.
* **Actions**
For Vuex, an action is just a function that receives an object with its parameters.
Actions are similar to mutations, the difference being that:
- Instead of mutating the state, actions commit mutations.
- Actions can contain arbitrary asynchronous operations.


## Links
    * https://medium.com/coding-stones/vuex-idd-part1-4b81d4088e54  >> https://github.com/codingstones/vuex-idd-part1/
    * https://medium.com/coding-stones/vuex-idd-part2-d2a16df00a41  >> https://github.com/codingstones/vuex-idd-part2/
    * Vue.js + Foundation: https://medium.com/@tommaso.marcelli/setting-up-vue-2-and-foundation-6-3f858b4ad20