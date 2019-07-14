var app1 = new Vue({
    el:"#app1",
    data:{
        text:'123.456'
    }
});


var app2 = new Vue({
    el:"#app2",
// 计算属性，返回一个结果
// 和data属性内的数据一样，可以通过{{ }}来插入到页面
// 计算属性还有两个容易忽略的实用技巧：
// 1.可以依赖其他计算属性
// 2.还可以依赖其他vue实例的data数据
// 3.计算属性是基于它的依赖缓存的，当依赖的数据发生变化时，它才会重新取值;不发生变化，计算属性就不更新
//   当遍历大数组和做大量计算时，应当使用计算属性，除非你不希望得到缓存
//   而methods则不同，只要重新渲染，它就会被调用，因此函数也会被执行
    computed:{
        reversedText:function(){
            return app1.text.split('.').reverse().join(',');
        }
    }
});


var app3 = new Vue({
    el:"#app3",
// 方法属性，
// 当返回一个结果时，也可以通过{{ }}插入到页面，但要写作调用方法的形式，即方法名()
    methods:{
        reversedText:function(){
            return app1.text.split('.').reverse().join(',');
        }
    }
});

 

