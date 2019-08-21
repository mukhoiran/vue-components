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
// Vue.component('multitext',{
//   template: '<div><b>text bold</b><br><i>text italic</i><br><u>text underline</u></div>'
// })

// <!-- =========== Component, Slot, and Array =========== -->
Vue.component('list',{
  template: '<div><people v-for="p in peoplelist"> {{p.name}} age {{p.age}}</people></div>',
  data: function(){
    return {
      peoplelist: [
        { name: 'andre', age: '30'},
        { name: 'sule', age: '40'},
        { name: 'tukul', age: '50'},
      ]
    }
  }
})

Vue.component('people',{
  template: '<li><slot></slot></li>'
})

var app = new Vue({
  el:'#app'
})
