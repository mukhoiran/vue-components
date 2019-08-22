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
// Vue.component('test',{
//   props: ['score1','score2'],
//   template: '<div><b>{{score1}}</b> with <b>{{score2}}</b></div>'
// })

// <!-- =========== Component with Event handler =========== -->
// Vue.component('name', {
//   template: "<input type='text' placeholder='insert name' @blur='validation'></input>",
//   methods: {
//     validation(){
//       this.$emit('applied')
//     }
//   }
// })

// <!-- =========== Review component =========== -->
Vue.component('vehicles',{
  template: "<div><h1 v-if='showtitle'>Choose your gift</h1><content v-for='(v, index) in vehicle' v-if='showchoice'>{{v.type}} <button @click='click(index)' v-if='showalert'>choose</button></content><h1 v-if='showresult'>Please get your gift on dealer</h1></div>",
  data: function(){
    return {
      vehicle: [
        {type: 'Car'},
        {type: 'Motorcycle'},
        {type: 'Bike'}
      ],
      showalert: true,
      showchoice: true,
      showtitle: true,
      showresult: false
    }
  },
  methods: {
    click(index) {
      alert('Congratulations you get ' + this.vehicle[index].type);
      this.showalert = false,
      this.showchoice = false,
      this.showtitle = false,
      this.showresult = true
    }
  }
})

Vue.component('content',{
  template: '<li><slot></slot></li>'
})

var app = new Vue({
  el:'#app',
})
