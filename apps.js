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
// Vue.component('list',{
//   template: '<div><people v-for="p in peoplelist"> {{p.name}} age {{p.age}}</people></div>',
//   data: function(){
//     return {
//       peoplelist: [
//         { name: 'andre', age: '30'},
//         { name: 'sule', age: '40'},
//         { name: 'tukul', age: '50'},
//       ]
//     }
//   }
// })
//
// Vue.component('people',{
//   template: '<li><slot></slot></li>'
// })

// <!-- =========== Passing data with Props =========== -->
// Vue.component('group',{
//   props: ['title','content'],
//   template: '<div><h2>{{title}}</h2><p>{{content}}</p></div>'
// })

// <!-- =========== Props =========== -->
Vue.component('test',{
  props: ['score1','score2'],
  template: '<div><b>{{score1}}</b> with <b>{{score2}}</b></div>'
})

var app = new Vue({
  el:'#app',
  data: {
    message: 'hello props',
    message2: 'hello props2'
  }
})
