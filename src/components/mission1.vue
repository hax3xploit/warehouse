<template>
    <div class="item">
        <div class="content" id="food" v-on:click=check()> Food</div>
        <div class="content" id="electronics"> Electronics</div>
        <div class="content" id="dairy"> Dairy Items</div>
        <div class="content" id="homeDecor"> Home Decor</div>

    </div>
</template>

<script>
export default {
    name:'mission1',
    methods:{
        check(){
            alert('Check 123')
            this.$router.push('foodItems');
        }
    }
}
</script>
<style>
.item{
    height: 600px;
    width: 600px;
    position:relative;
    margin: 50px;
    background: rgb(130, 228, 245);
}

.content{
    height: 250px;
    width: 250px;
    border:5px solid;
    float: left;
    margin: 20px;
}
#food{
    
    background: rgb(148, 164, 165);
}
#electronics{
    
    background: rgb(218, 230, 187);
}
#dairy{
    
    background: rgb(116, 141, 116);
}
#homeDecor{
    
    background: rgb(210, 222, 223);
}
</style>