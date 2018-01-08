# Proof of concept about Vue.js
Playing around with Vue.js :-)

## Introduction
* Vue.js is an MIT-licensed open source project.
* Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
* **Composing with components**: In Vue, a component is essentially a Vue instance with pre-defined options
* example of what an app’s template might look like with components:
```
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```

## The Vue Instance
* Every Vue application starts by creating a new Vue instance with the Vue function
* Inspired by MVVM pattern: https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel
* As a convention, we often use the variable vm (short for ViewModel) to refer to our Vue instance.
* When you create a Vue instance, you pass in an **options object**.
* A Vue application consists of a root Vue instance created with new Vue, optionally organized into a tree of nested, reusable components.
* When a Vue instance is created, **it adds all the properties found in its data object to Vue’s reactivity system**.
* It should be noted that properties in data are only reactive if they existed when the instance was created.
* **Instance Lifecycle Hooks**: Each Vue instance goes through a series of initialization steps when it’s created
* **Lifecycle diagram**: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram


## Template syntax
* Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance’s data.
* All Vue.js templates are valid HTML that can be parsed by spec-compliant browsers and HTML parsers.
* Interpolations
    * Text
    * Raw HTML: Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use HTML interpolation on trusted content and never on user-provided content.


## Testing
* https://blog.octo.com/en/tdd-with-vue-js/
* https://vuejsdevelopers.com/2017/12/25/vue-js-test-driven-development-tdd/


## Development environment
* Install Vue Devtools (FF + Chrome) https://github.com/vuejs/vue-devtools#vue-devtools
* NPM is the recommended installation method when building large scale applications with Vue. It pairs nicely with module bundlers such as Webpack or Browserify.
* NPM is the recommended installation method when building large scale applications with Vue.
* Vue.js provides an official CLI for quickly scaffolding ambitious Single Page Applications.
* CDN: Recommended: https://cdn.jsdelivr.net/npm/vue, which will reflect the latest version as soon as it is published to npm. Also available on unpkg and cdnjs
* Directives are prefixed with v- to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM.


## Interesting links
* https://vuejs.org/
* https://vuejs.org/v2/guide/
* https://github.com/vuejs/vue
* Comparison with Other Frameworks: https://vuejs.org/v2/guide/comparison.html


## Pending
* https://deliciousbrains.com/vue-vs-react-battle-javascript/
