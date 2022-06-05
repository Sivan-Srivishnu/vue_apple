<template>
    <div>
        <v-card class="emiNav" elevation="0" tile>Get No Cost EMI for 3 or 6 months with qualifying Credit Cards from most leading banks. <span>‡</span></v-card>
        <v-card tile class="emojiCard">
            
                <img src="https://www.apple.com/v/home/ao/images/heroes/wwdc-announce/hero_wwdc__f92lwkqwvxqq_large.png" alt="">
            <img class="wwdc--announce" src="https://www.apple.com/v/home/ao/images/logos/wwdc-announce/hero_logo_wwdc__7n8o8f1vb9e6_large.png" alt="">
            <v-card-title class="white--text emojiTitle">Watch online on Monday at 10:30PM IST</v-card-title>
            <v-card-title class="white--text emojiHREF"><a href="#">Learn More ></a></v-card-title>
            
        </v-card>
        <v-card tile class="iPhoneCard" elevation="0">
            
                <v-card-title class="iphone13--Title">iPhone 13 Pro</v-card-title>
            <v-card-subtitle class="iphone13--subTitle black--text mt-1">Oh. So. Pro.</v-card-subtitle>
            <section>
                <a href="#">Learn more ></a>
                <a href="#">Buy ></a>
            </section>
            
            <v-card elevation="0" class="iphone13Card">
                <v-img class="iphone13--img" src="https://www.apple.com/v/home/ao/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_large.jpg" alt="iphone13" lazy-src="https://www.apple.com/v/home/ao/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_large.jpg"></v-img>
            </v-card>
            
        </v-card>
        <v-card class="iphoneSE mt-10" elevation="0">
           <section class="d-flex flex-column align-center">
               <span class="the--new">The new</span>
               <v-img lazy-src="https://www.apple.com/v/home/ao/images/logos/iphone-se/logo_hero_iphonese__dtb7zrygggeq_large.png" src="https://www.apple.com/v/home/ao/images/logos/iphone-se/logo_hero_iphonese__dtb7zrygggeq_large.png" class="iphoneSETilte--img" alt="iPhoneSE"></v-img>
               <span class="iphoneSE--subtitle">Love the power. Love the price</span>
               <section>
                <a href="#">Learn more ></a>
                <a href="#">Buy ></a>
                </section>
            <v-card class="iPhoneSE--imgCard" elevation="0">
                <img class="iPhoneSE--img" src="https://www.apple.com/v/home/ao/images/heroes/iphone-se/hero_iphonese_avail__eg8srhcnpo66_large.jpg" alt="iPh"/>
            </v-card>
           </section>
        </v-card>
        <v-spacer></v-spacer>
    <v-card class="iPad_Iphone13card mb-10 d-flex" elevation="0">
        <v-card class="iPad" dark tile elevation="0">
            <section class="d-flex flex-column">
                <v-img src="https://www.apple.com/v/home/ao/images/logos/ipad-air/promo_logo_ipadair__frwnnsqveeye_large.png" class="iPadTitle--img" alt="iPadTitle--img" lazy-src="https://www.apple.com/v/home/ao/images/logos/ipad-air/promo_logo_ipadair__frwnnsqveeye_large.png" />
                <span>Light.Bright.Full of might</span>
                <section>
                <a href="#">Learn more ></a>
                <a href="#">Buy ></a>
                </section>
            </section>
        </v-card>
        <v-card class="iphone13 d-flex flex-column align-center" tile elevation="0">
            <v-card-title class="iphone13--Title--title">iPhone 13 Pro</v-card-title>
            <section>
                <a href="#">Learn more ></a>
                <a href="#">Buy ></a>
                </section>
        </v-card>
    </v-card>
    </div>
</template>

<script>
    export default { 
        name:"LandingComp"
    }
</script>

<style scoped>
.emiNav{
    margin: 44px 0;
    display: flex;
    justify-content: center;
    padding:10px;
    font-size: 13px;
    word-spacing: 2px;
    letter-spacing: 1.5px;

}
.emiNav span{
    font-size: 9px;
}
.emojiCard{
    padding-bottom: 55px;
    margin-top: -44px;
    height: 81vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(2,0,36);
background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(2,13,31,1) 100%);
}
.emojiCard div{
    margin-top: -12px;
}
.wwdc--announce{
    margin-top: -210px;
}
.emojiTitle{
    font-size: x-large;

}
.emojiHREF a{
    font-size: 22px;
    text-decoration: none;
    margin-top: -20px;
    font-weight: 400;
}
.emojiHREF a:hover{
    text-decoration: underline;

}
.iphone13--Title{
    text-align: center;
    color:#1D1D1F;
    font-size: 3.5rem;
    font-weight: bold;
   margin-top: -30rem;
position: absolute;
    z-index: 5;
}
.iPhoneCard{
    height: 80vh;
    padding: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

}
.iphone13--subTitle{
    margin-bottom: 23rem;
    color:#1D1D1F;
    font-size: xx-large;
    position: absolute;
    z-index: 5;
}

.iPhoneCard
section{
    width: 200px;
    display: flex;
    justify-content: space-evenly;
    font-weight: 800;
    font-size: large;
   /* border: 2px solid crimson; */
    z-index: 5;
    position: absolute;
    margin-bottom: 19rem;
    
    
}


section a{
    text-decoration: none;
}


section a:hover {
    text-decoration: underline;
}

.iphone13Card{
    overflow: hidden;
    /* border:2px solid#1D1D1F; */
    height: 70vh;
    position: relative;
    margin-bottom:10px ;
}
.iphone13Card .iphone13--img{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
   margin-bottom: 200px;
    aspect-ratio: 8/3; 

}

.iphoneSE{
    /* height: 70vh; */
}
.the--new{
    font-weight:bold;
    font-size:1.5rem
}
.iphoneSE--subtitle{
    font-size: xx-large;
    font-weight:400;
}

.iphoneSE section section a , .iPad section section a , .iphone13 section a{
    
    padding: 10px;
    justify-content: space-evenly;
    font-weight: 800;
    font-size: large;
    

}
.iPhoneSE--imgCard{
    overflow: hidden;
    display: flex;
    justify-content: center;
    
    
}
.iPhoneSE--imgCard .iPhoneSE--img{
    margin-top: -200px;
    /* position: absolute;
    z-index: -1; */
}

.iPad_Iphone13card, .iPad
, .iphone13{
    flex-basis: 48%;
    margin: 0 auto;
    height: 70vh;
}
.iPad{
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://www.apple.com/v/home/ao/images/promos/ipad-air/promo_ipadair_avail__ferd4bfpcdm6_large.jpg");
}
.iPadTitle--img{
    width: 100px;
    margin: 50px auto;
    
}
.iPad section span{
    font-size: xx-large;
    text-align: center;
    margin-top: -50px;

}

.iPad section section, .iphone13 section section {
    margin: 0 auto;
}
.iphone13{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://www.apple.com/v/home/ao/images/promos/iphone-13/promo_iphone13_avail__frc36u35m0ii_large.jpg");
    
}

.iphone13--Title--title{
    /* text-align: center; */
    color:#1D1D1F;
    font-size: 2.5rem;
    font-weight: bold;
   margin-left: 0 auto;
/* position: absolute; */
    z-index: 5;
}
</style>