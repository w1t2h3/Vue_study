var app = new Vue({
    el:"#app",
    data:{
        books:[
            {
                name:'《Vue.js实战》',
                author:'梁灏'
            },
            {
                name:'《JavaScript 语言精粹》',
                author:'Douglas Crockford'
            },
            {
                name:'《JavaScript 高级程序设计》',
                author:'Nicholas C.Zakas'
            },
        ],
        bookss:[]
    },
    // 也可以使用计算属性来获取filter方法得到的新数组
    // 然后再使用 v-for="book in filterBooks" 来进行遍历新数组
    computed:{
        filterBooks:function(){
            // 过滤掉书名没有‘高级’两字的书籍
            return this.books.filter(function(item){
                return item.name.match('高级');
            });
        },
    // 也可以使用计算属性通过sort方法改变原数组
    // 然后再使用 v-for="book in sortBooks" 来进行遍历改变后的原数组
    // 实现书名长度从短到长排列
        sortedBooks:function(){
            return this.books.sort(function(a,b){
                return a.name.length - b.name.length;
            });
        }
    }
});

// Vue的核心是数据与视图的双向绑定
// Vue包含了一组观察数组变异的方法，使用它们改变数组也会触发视图更新
// push()  pop()  shift()  unshift()  splice()  sort()  reverse()
app.books.push({
    name:'《CSS揭秘》',
    author:'[希] Lea Verou'
});



// 有些方法不会改变原数组，它们返回的是一个新数组
// filter()  concat()  slice()
// 那么就使用新数组来替换原数组
// 过滤掉书名中没有‘CSS’的书籍
// app.books = app.books.filter(function(item){
//     return item.name.match('CSS');
// });


// sort方法改变原数组，实现书名长度从短到长排列
// return返回一个小于 0 的值，则a<b ,小的排在大的前面
app.books.sort(function(a,b){
    return a.name.length - b.name.length;
})