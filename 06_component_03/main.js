Vue.component("my-component",{
    template:`
        <div>
            <button @click="handleIncrease">+1</button>
            <button @click="handleReduce">-1</button>
        </div>
    `,
    data:function(){
        return {
            counter:0
        }
    },
    methods:{
        handleIncrease:function(){
            this.counter++;
            // 点击按钮，触发子组件定义的increase事件
            // 外部组件（父组件）通过@increase，也就是v-on:increase来监听
            this.$emit("increase",this.counter);
        },
        handleReduce:function(){
            this.counter--;
            this.$emit("reduce",this.counter);
        }  
    }
});

new Vue({
    el:"#app",
    data:{
        total:0
    },
    methods:{
        handleGetTotal:function(total){
            this.total = total;
        }
    }
});