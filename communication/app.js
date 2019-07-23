Vue.component('child-component', {
  props: ['propsdata'],
  template: `
    <div>
      <p>{{ propsdata }}</p>
      <button v-on:click="showLog">show</button>
    </div>
  `
  ,
  methods: {
    showLog: function() {
      this.$emit('show-log');
    }
  }
})

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    printText: function() {
      console.log("received an event");
    }
  }
})