var app1 = new Vue({
    el:"#app",
    data:{
        list:[
            {
                id:1,
                name:'房租水电',
                price:900,
                count:1
            },
            {
                id:2,
                name:'生活费',
                price:1000,
                count:1
            },
            {
                id:3,
                name:'交通费',
                price:100,
                count:1
            }
        ],
        priceList:[],
        checked:false
    },
    computed:{
       

        totalPrice:function(){
            var totalPrice = 0;
            for(var i=0;i<this.priceList.length;i++){
                 totalPrice += this.priceList[i]
            }
            return totalPrice.toString().replace(/\B(?=((\d{3})+$))/g,',');
        }

    },
    methods:{
        handleReduce:function(index){
            if(this.list[index].count === 1){
                return;
            }
            this.list[index].count--;
        },
        handleAdd:function(index){
            this.list[index].count++;
        },
        handleRemove:function(index){
            this.list.splice(index,1);
        },
        onePrice:function(index){
            var onePrice = 0
            onePrice =  this.list[index].price * this.list[index].count;
            return onePrice;          
        },
        checkAll:function(){
            // 如果priceList数组长度不等于商品列表list的长度，即商品没有被全选时，
            // 点击全选复选框，把将列表中所有的商品购买金额，都push到priceList数组中，
            // 因为每个商品的复选框都设置了v-model="priceList" :value=onePrice(index),
            // 所以也就是每个商品都被选中
            if(!this.checked){
                _this = this;
                _this.priceList = [];
                this.list.forEach(function(item,index){
                    _this.priceList.push(_this.onePrice(index));
                });
            }else{
                // 因为数组为空，所有商品都被不选中
                this.priceList = [];
            }
            
        }
    },
    // 侦查属性
    watch:{
        priceList:function(newVal,oldVal){
            //监视priceList数组长度,当其等于商品列表的长度时，说明所有的商品都被选中，
            // 那么就设置这个全选框v-model绑定的check=true,则全选框就被选中
            if(newVal.length === this.list.length){
                this.checked = true;
            }else{
                this.checked = false;
            }
        }
    }  
});
