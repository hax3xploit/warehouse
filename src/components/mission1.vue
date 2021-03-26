<template>

<b-container class="mt-5">
    <div class="item">
        <div >
            <b-card-group >
                <b-card deck   id="food" v-on:click=check() bg-variant="primary" text-variant="white" header="Food 🍲" class="text-center ">
                    <b-card-text>Food is any substance consumed to provide nutritional support for an organism. </b-card-text>
                </b-card>

                <b-card  id="electronics" bg-variant="secondary" text-variant="white" header="Electronics 🤖" class="text-center">
                    <b-card-text>Electronics comprises the physics, engineering, technology and applications that deal with the emission, flow and control of electrons in vacuum and matter.</b-card-text>
                </b-card>
            </b-card-group>
        </div>

        <div class="mt-3">
            <div >
                <b-card-group >
                    <b-card deck  id="dairy" bg-variant="light" header="Dairy 🐄" class="text-center">
                        <b-card-text>Dairy products or milk products are a type of food produced from or containing the milk of mammals, most commonly cattle, water buffaloes, goats, sheep, and ...</b-card-text>
                    </b-card>

                    <b-card deck  id="homeDecor" bg-variant="dark" header="HomeDecor ✨" text-variant="white" class="text-center">
                        <b-card-text>Home decor is the style of your home interiors and includes the items you use to decorate and personalise your house. </b-card-text>
                    </b-card>
                </b-card-group>
            </div>
        </div>
    </div>
</b-container>    
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