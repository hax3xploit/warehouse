<template>
    <div>
        <h1>Play Linear Search</h1>
         <food-items/>
         <mission-1/>
    <electronics/>
    </div>
</template>

<script>
import FoodItems from './FoodItems'
import Electronics from './Electronics'
import mission1 from './mission1'
export default {
    name:'P_linearSearch',
    components:{
        mission1,
        FoodItems,
        Electronics
    


    }
}
</script>
