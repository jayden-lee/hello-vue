var eventBus = new Vue();

Vue.component('child-component', {
  template: `
  <div>
    하위 컴포넌트<br/>
    <button v-on:click="showLog">show</button>
  </div>`,
  methods: {
    showLog() {
      eventBus.$emit('triggerEventBus', 100);
    }
  }
});

var app = new Vue({
  el: '#app',
  created: function() {
    eventBus.$on('triggerEventBus', function(value) {
      console.log("이벤트를 전달 받음. 값 : ", value);
    });
  }
});