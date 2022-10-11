<template>
    <div class="">
        <v-card  elevation="0" tile class="loginCard">
            <v-card elevation="0" class="loginFormCard m-auto">
                <v-card-title class="mt-11 formTitle">Sign in for faster checkout.</v-card-title>
                <v-container class="formContainer m-auto">
                    <v-form class="d-flex flex-column d-block">
                        <v-card-title class="m-auto #494949--text">Sign in to Apple Store</v-card-title>
                        <input rounded type="text" class="outlineOnFocus" placeholder="Apple ID">
                        <v-icon class="arrow">fa-light fa-arrow-right</v-icon>
                        
                            <v-checkbox class="m-auto mt-16" @click="!rememberMe" v-model="rememberMe" id="checkBoxLable outlineOnFocus" label="Remember Me" />
                            <hr>
                            <v-card elevation="0" class="d-flex justify-center"><a href="#"><span>Forgotten your Apple ID or password? </span></a>
                            <v-icon>fa-solid fa-location-arrow</v-icon></v-card>
                            <v-card elevation="0" class="d-flex justify-center">Do not have an Apple ID? <a href="/account">Create yours now.</a>
                            <v-icon>fa-solid fa-location-arrow</v-icon></v-card>
                    </v-form>
                </v-container>
            </v-card>
        </v-card>
    </div>
</template>

<script>
    export default {
    name: "LoginComp",
        data() {
            return {
                rememberMe: false,
            }
        },
    }
</script>


<style scoped>

a span::after{
    
    font-size: medium;
    padding: 10px;
    margin-bottom: 20px;
}
hr{
    width: 200px;
    margin:10px auto;
}

.arrow{
    margin-left: 320px;
    position: absolute;
    margin-top: 54.5px ;
    border: 1px solid #555;
    padding:1px;
    border-radius: 100%;
}
.outlineOnFocus{
    width: 300px;
    border: 1px solid black;
    height: 40px;
    padding: 10px;
    margin: -15px auto;
    border-radius: 5px;
}

.outlineOnFocus:focus{
    outline: 2px solid #2079D2;
}
.formContainer{
    width: 50%;
    border:3px solid white;
    padding:15px;
    
}
.loginFormCard{
    width:60vw;
    height: 93vh;
}
.formTitle{
    font-size: xx-large;
}
.loginCard{
    height: 93vh;
}
</style>