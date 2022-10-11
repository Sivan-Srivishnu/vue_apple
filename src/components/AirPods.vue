<template>
  <div>
    <v-card class="subNavBarAirPods mt-11" elevation="0" tile>
      <Transition enter-active-class="animate__animated animate__slideInRight">
        <v-container class="subNavBarAirPods--itemsContainer d-flex justify-space-between">
          <section
            v-for="item in airpodsItemsContainer"
            :key="item"
            class="mr-12 "
            
          >
            <img loading="lazy" :src="item.imgSrc" alt="" style="margin-left:15px" />
            <span style="margin-left:15px">
                {{ item.name }}
            </span>
          </section>
        </v-container>
      </Transition>
    </v-card>
    <v-card rounder elevation="0" class="videoCard">
        <video src="https://www.apple.com/105/media/us/airpods/2022/7052f60e-c8a4-4a32-b278-0d0348fbcd0a/anim/spatial/large_2x.mp4" autoplay loop style="width:100%;border-radius: 30px; "></video>
        <section style="position:absolute;margin-top:-25%; margin-left: 41%;">
            <span style="font-size:100px;color: white;">AirPods
</span><br>
<span style="font-size:30px;color: white;margin-left: 70px;">3rd generation</span>
<br>
<span style="font-size:20px;color: white;margin-left: 120px;">₹20500.00*</span>
        </section>
    </v-card>
    <v-card class="airPodsProCard">
        <span style="font-size:150px;color: white;text-align: center;margin-left: 350px;position:absolute;top:150px">AirPods Pro
</span><br>

    </v-card>
    <v-card class="airpodProMax" elevation="5">
        <img src="https://www.apple.com/v/airpods/r/images/overview/airpods_max_logo__bdgdixidcqcy_large.jpg" alt="" style="position:relative;left:150px;top:200px">
        <img src="https://www.apple.com/v/airpods/shared/compare/a/images/compare/compare_airpods_max__b14s2x6q07rm_large.png" alt="" style="position:absolute;width: 500px;right: 500px;">
    </v-card>
    <v-carousel 
    
    cycle
    height="500"
    width="98%"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="success"
        v-bind="attrs"
        v-on="on"
      >Previous slide</v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color="info"
        v-bind="attrs"
        v-on="on"
      >Next slide</v-btn>
    </template>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            <img :src="slide.image" alt=""  style="width:100%"> 
            <figcaption style="textAlign:center">AirPods Pro</figcaption>
          </div> 
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <v-card class="airPodsCard">
    
  </v-card>
  </div>
</template>

<script>
    export default {
    name: "AirPodsComp",
    data() {
        return {
            airpodsItemsContainer: [
                 {name:"AirPods 2nd  Generation" , imgSrc:"https://www.apple.com/v/airpods/r/images/chapternav/airpods_2gen_light__ckwbqlgv1r9e_large.svg"},
                {name:"AirPods 3nd Generation" , imgSrc:"https://www.apple.com/v/airpods/r/images/chapternav/airpods_3gen_light__6r7zooyk4lua_large.svg"},
                {name:"AirPods Maz" , imgSrc:"https://www.apple.com/v/airpods/r/images/chapternav/airpods_pro_light__ets5a19rt3au_large.svg"},
                {name:"AirPods Pro" , imgSrc:"https://www.apple.com/v/airpods/r/images/chapternav/airpods_max_light__cvaaddhgazqu_large.svg"},
                {name:"Compare" , imgSrc:"https://www.apple.com/v/airpods/r/images/chapternav/airpods_compare_light__cmuvdvbxj1w2_large.svg"},
                {name:"Apple Music" , imgSrc:"https://www.apple.com/v/airpods/r/images/chapternav/apple_music_light__fexraacz3dme_large.svg"},
            ],
            colors: [
          
        ],
        slides: [
          {image:"https://voicebot.ai/wp-content/uploads/2020/03/airpods-pro-lite.png",name:"AirPods Pro"},
          {image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/og-airpods-max-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1603996970000",name:"AirPods Pro Max"},
          {image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAOEA8PDQ4NDQ4NDQ0NDQ0NDQ8NDw0NFREWFhUSExMYHCghGBolGxYWIT0hJSktLjouFx82ODMsNygtLisBCgoKDQ0NDw0NDisZFRkrKysrKy0rKysrKy0rKysrKystKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAwEEBQIGB//EADkQAAIBAgIGBgkEAQUAAAAAAAABAgMRBDESIVFhcYEFMkFykbEGExQiUlNiksFCoeHwQyMzorLC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGG7Znh1ortAoCHtcNq8UY9sh8S8UBsA1/bIfEvFD2yHxLxQGwDX9sh8S8UPbIfEvFAbANf2yHxLxRn2uHxLxQFwSWIi+09xmnkwPQAAAAAAAAAAAAAAAAAAAAAQr4hR1LW8tW09Yipor+5GnpxgtOo1G+3sWxFHvQlLXJ23LPmzKoR2J8dfmc+r0zH9Cb3vUa08fKf6mty1FHYlKEc9GPgSljKa38InITPaQHTjjIPsa5IvFpq6s0cqETcwjs7djQG3Y154qC2vgj1ipe7xduRoTiBuLG0+1NcUVhVhLJxe7I5EonhsDuOjF/pXgYdG3Vk1uetHGhjJQyk+HYXp9MW60b71qYHUpYhp2kv54M2075HNo4unWVovXsepp7jYwtRp6L4c9pBtgAgAAAAAAAAAAAAAAAA0sU7yS3pfk42NvUqNa3b3YpHXr9dcX5HnB0Yq8s25SV+Dat+xRo4XoZZ1PtTsubOnSwkI9WMVwX5K3Fyic8On2J8j53pHpTDUMTDCVJSpVqsFOnpwlGnUTbVozepvU9SPp7nF9LfR6n0lh3Sk1CrB6eHrdtKosnfO38PsAzBmzhs77jk9DYXF0sPCOO9W8RTvCU6UnONSC6s8lZtdh1sNlfaEVxGuPBmnNm3J3TRpwg5N2V7Xsnk32IDmdKdMYfCunHETlp1pxhSo04OpVqNtJWgtb1s+jo4SK/SkfL+i3ovWhiavSHSTpzxU3KNCnTk5ww1LJJNpe9bZtfL7G4VKWHi80nxSZo4roiEtcVoPdl4HSuYuB81PCypPXqa1qSyfA7FKpfQl2yjr4r+s2a1NTTTWZp0I2UFnrnbhZgdZO5k808lwR6MgAAAAAAAAAAAAAAADTxse1bnzX8EcNL3eM6j/5yN+rDSVu3s4nMTsrbJT/AOzKOb6TeluF6MVN4uU165y0I04actGNtKTWxXW/WdmliIzjGcGpRnFSjJZSi1dNcjg+kPo/hOkVTWNoRrKjJyptzlBxvbSV4tNxdldZakdD1iiklaKSSSWpJLJJFR0VUPcZnK9o3otTxAVvVbSTNG9tWw2I1TUxcrPiB70zawsEk3tdzmQndpbWdLTskBdyPDqGtUrmtPEb0B0fWHBqemODjjl0c5y9pbjF2h/pxqSipRg5bWmvFG7GvvRzX6PYOWMXSDw8HjIpJVtKWtqOipOF9FyUdWk1eyQR9EpazXwa0tHctHm3d/gRqazawFO0U3s1EVtgAgAAAAAAAAAAAAAAAA19NyvfslJauJlU1bt8TxTzl35eZaOXMohUViUpPaWq5kJFGdLfYw39RNmAil/qF/qJgCl/qF/qJgCl/qPSl9REygKaRSJGJaAVdU1v8TzlrRVEpEFaMrxTebPZPD9VcChAAAAAAAAAAAAAAAABq085d+XmWjlzI085d+Xmy0cuZRGrmQkXrZkJFE2YMswEADAGQYMgDKMBAe4loEYloBW0iUsiqJSIKYfqx4FCeH6seBQgAAAAAAAAAAAAAAAA1YZy70vNlo5cyMM5d+XmWjlzKI1syEi9bMhIomzBlmAgYAAGTAAyEAgPcS0CMS0AraRKWRVEpZEFMP1Y8ChPD9WPAoQAAAAAAAAAAAAAAAAasM5d6XmWjlzIwzl3peZaOXMojWzISL1syEiibMGWYCMAAAAAMhGDKA9xLQIxLQCtpEpZFURlkQVw/VjwRQnh+rHgihAAAAAAAAAAAAAAAABqwzl3peZaOXMhDOXel5l45cyiNbM15GxWzNeRRNmDLMBAAwBkGDIAyjBlAe4lYEolYBW0iU8iqJTyIK4fqx4IoTodWPdRQgAAAAAAAAAAAAAAAA1F1pd5loZcyM9U5b7P9v4KQeZROtma8i9Y15Mo8MwGzzcI9A83FwPQPNxcD0ZR4uZTArEtA14svTYVtojPIpfUQrS1MDaodWPdXkezEVZJbEkZMgAAAAAAAAAAAAAAADWxataWz3Xw7P7vPEZm3KKaaetPUzm1k6bs9cX1Zfh7y4KVZGvJiVQjKZUemzFyTmY0wK3FyOmNMC1xcjpjTAtcymR0zKmBsRZenI04zLRmBuuZ5gtKSXYvefLI1lUbejFXk8kjo4ejoLa3rk9rIqoAIAAAAAAAAAAAAAAAABiUU000mnmnrTMgDmYjovtpT0fpl7y5PNfuaFXBYiP+NT3wnH/1Y+iAo+WlSrrOhU5JPyZ59XW+RV+xn1YLR8noVvkVvsY0K3yK32M+sAo+T0K3yK32MaFb5Fb7GfWAUfKaFb5Fb7GZVOv8ir9tj6oCj5qnhcQ/8LW+U4L83N2h0XUf+5OMVsheT8XkdgCiWHw8aatFW2t62+LKgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",name:"AirPods 2nd Genration"},
          {image:"https://www.xda-developers.com/files/2021/10/2021-10-18_18-14-42.439-1024x576.jpeg",name:"AirPods 3rd Genration"},
          {image:"https://voicebot.ai/wp-content/uploads/2020/03/airpods-pro-lite.png",name:"AirPods Pro"},
          {image:"https://voicebot.ai/wp-content/uploads/2020/03/airpods-pro-lite.png",name:"AirPods Pro"},
          
          ],
        
            }
        },
  mounted() {
          document.title = "AirPods - Apple (IN)"
        }
    }
</script>

<style scoped>
.videoCard,.airPodsProCard,.airpodProMax{
    width: 98%;
    margin: 10px auto ;
    position: relative;
    /* height: 50vh; */
    border-radius: 100px;
    
}
.airPodsProCard{
    background-image: url("https://www.apple.com/v/airpods-pro/f/images/meta/og__ch3csr9zmviq_overview.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height:80vh;
    border-radius: 50px !important;


}
.airpodProMax{
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height:80vh;
    border-radius: 50px !important;

}
.subNavBarAirPods {
  height: 110px;
  /* padding:10px; */
}
.subNavBarAirPods--itemsContainer {
  
  height: 100%;
  width: 60%;
  /* padding: 0; */
  /* padding-right: 5px; */
}
.subNavBarAirPods--itemsContainer section {
  
  width: 100px;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  font-size: 10px;
  text-align: center;
  /* justify-content: baseline; */
}

.subNavBarAirPods--itemsContainer section:hover {
  color: #2079d2;
}

</style>
