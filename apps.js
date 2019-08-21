// <!-- =========== Components =========== -->
// Vue.component('textbold',{
//   template: '<b>This text come from component</b>'
// })

// <!-- =========== Power Components =========== -->
// Vue.component('textbold',{
//   template: '<b>This text come from component</b>'
// })

// <!-- =========== Slot in action =========== -->
// Vue.component('textbold',{
//   template: '<b><slot></slot></b>'
// })

// <!-- =========== Multi element =========== -->
Vue.component('multitext',{
  template: '<div><b>text bold</b><br><i>text italic</i><br><u>text underline</u></div>'
})

var app = new Vue({
  el:'#app'
})
