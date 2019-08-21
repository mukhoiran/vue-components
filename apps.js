// <!-- =========== Components =========== -->
// Vue.component('textbold',{
//   template: '<b>This text come from component</b>'
// })

// <!-- =========== Power Components =========== -->
// Vue.component('textbold',{
//   template: '<b>This text come from component</b>'
// })

// <!-- =========== Slot in action =========== -->
Vue.component('textbold',{
  template: '<b><slot></slot></b>'
})

var app = new Vue({
  el:'#app'
})
