
// 组件必须在vue实例创建前注册
// 下面这个component1是全局组件，在所有的vue实例内都可以使用
Vue.component('component1',{
    template:`
        <div>这是全局组件component1</div>
    `
})

// 下面这个component2是局部组件，只在注册的实例作用域内有效
var local_component = {
    template:`
    <div>这是局部组件component2</div>
    `
}

var app = new Vue({
   el:"#app1",
   components:{
       component2:local_component
   }
});

var app = new Vue({
    el:"#app2"
 });