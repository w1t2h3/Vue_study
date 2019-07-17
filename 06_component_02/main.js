Vue.component('my-component',{
    props:['message'],
    template:"<div>{{message}}</div>"
});

Vue.component('com',{
    props:['arr'],
    template:"<div>{{arr.length}}</div>"
});

Vue.component("compo",{
    props:['initCount'],
    template:"<div>{{count}}</div>",
    data:function(){
        return {
            count:this.initCount + 1
        }
    }
});

Vue.component("component-my",{
    props:['fontSize'],
    template:"<div :style='styles'>组件内容</div>",
    computed:{
        styles:function(){
            return {
                fontSize:this.fontSize + 'px',
                color:'red'
            }
        }
    }
});

new Vue({
    el:"#app",
    data:{
        msg:''
    }
});