<template>
  <div>
    <v-card tile elevation="2" class="mt-11 titleCard">
      <v-container
        class="titleContainer d-flex align-center justify-space-between"
      >
        <v-container
          ><v-card-title class="title--text"
            >Apple ID</v-card-title
          ></v-container
        >
        <v-container class="navContainer">
          <nav>
            <router-link to="/login">Sign in</router-link>
            <router-link to="/login">Create Your Apple ID</router-link>
            <router-link to="/faq">FAQ</router-link>
          </nav>
        </v-container>
      </v-container>
    </v-card>
    <v-form @submit.prevent="handleSubmit">
      <v-card elevation="0" class="formCard m-auto mt-2" tile>
        <v-card elevation="0" class="commanStyle nameCountryDob">
          <v-card-title class="title--AppleID d-flex justify-center"
            >Create Your Apple ID</v-card-title
          >
          <v-card-subtitle class="subTitle--AppleID"
            >One Apple ID is all you need to access all Apple services. You
            already have an Apple ID?<a href="#"
              >Find it here ></a
            ></v-card-subtitle
          >
          <v-layout>
            <v-flex
              class="d-flex nameFlex justify-space-between d-block flex-row"
            >
              <v-textField
                class="textField mr-1"
                v-model="profilePayload.firstName"
                outlined
                placeholder="First Name"
                label="First Name"
              ></v-textField>
              <v-textField
                class="textField ml-1"
                v-model="profilePayload.lastName"
                outlined
                placeholder="Last Name"
                label="Last Name"
              ></v-textField>
            </v-flex>
          </v-layout>
          <v-layout style="padding: 15px; margin-top: -45px">
            <v-flex>
              <label for="Country">COUNTRY / REGION</label>
              <v-select
                :items="items"
                label="Select Your Country"
                outlined
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout style="padding: 15px; margin-top: -45px">
            <v-flex>
              <v-textField
                outlined
                v-model="profilePayload.dob"
                placeholder="dd-mm-yyy"
                label="date of birth"
              ></v-textField>
            </v-flex>
          </v-layout>
        </v-card>
        <hr />
        <v-card elevation="0" class="commanStyle emailID">
          <label style="margin-bottom: -20px"
            >This will be your new Apple ID</label
          >
          <v-layout style="padding: 15px">
            <v-flex>
              <v-textField
              
                v-model="profilePayload.emailID"
                :rules="emailRules"
                label="E-mail"
                required
                outlined
                placeholder="name@example.com"
              ></v-textField>
            </v-flex>
          </v-layout>
          <v-layout style="padding: 15px; margin-top: -40px">
            <v-flex>
              <v-textField label="password" v-model="profilePayload.Password" type="password" outlined>
              </v-textField>
            </v-flex>
          </v-layout>
          <v-layout style="padding: 15px; margin-top: -40px">
            <v-flex>
              <v-textField label="confirm password" type="password" v-model="profilePayload.confirmPassword" outlined>
              </v-textField>
            </v-flex>
          </v-layout>
        </v-card>
        <hr />
        <v-card elevation="0" class="commanStyle">
          <v-layout style="padding: 15px">
            <v-flex>
              <v-select
                :items="items"
                label="Outlined style"
                outlined
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout style="padding: 15px; margin-top: -45px">
            <v-flex>
              <v-textField type="tel" label="phone number" outlined>
              </v-textField>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-card-subtitle
                class="subTitle--AppleID"
                style="margin-top: -45px; font-size: small; text-align: left"
                >Make sure you enter a phone number you can always access. It
                will be used to verify your identity any time you sign in on a
                new device or web browser. Messaging or data rates may
                apply.</v-card-subtitle
              >
            </v-flex>
          </v-layout>
          <v-layout style="padding: 15px; margin-top: -4px">
            <v-flex
              >Verify with a:
              <v-container class="d-flex"
                ><v-radio-group v-model="radioGroup">
                  <v-radio label="Text message" value="Text message"></v-radio>
                  <v-radio
                    label="Phone call"
                    value="Phone call"
                  ></v-radio> </v-radio-group
              ></v-container>
            </v-flex>
          </v-layout>
        </v-card>
        <hr />
        <v-btn
          style="margin-left: 45%; margin-bottom: 50px"
          @click="handleSubmit"
          >continue</v-btn
        >
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { auth, db } from "../apis/firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
export default {
  name: "AccountComp",
  data() {
    return {
      radioGroup: 1,
      profilePayload: {
        firstName: "",
        lastName: "",
        country: "",
        dob: "",
        emailID: "",
        password: "",
        confirmPassword: "",
        uid: "",
        countryCode: "",
        phoneNumber: "",
        verifyWith: "",
        Announcements: true,
        appsMusicApp: true,
      },
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    handleSubmit: async function () {
      try {
        await createUserWithEmailAndPassword(
          auth,
          this.profilePayload.emailID,
          this.profilePayload.password
        ).then(userCredential => {
          this.profilePayload.uid = userCredential.user.uid;
          userCredential.user.displayName = this.profilePayload.firstName;
          console.log(userCredential);
        });
        this.sendData();
      } catch (error) {
        console.log("hello",error.message);
      }
    },
    sendUserData: async function () {
      try {
        const docRef = await addDoc(collection(db, "profilePayload"), this.profilePayload);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>

<style scoped>
.emailID {
  height: 260px !important;
}
hr {
  color: #2079d2;
}
label {
  margin-left: 15px;
}
.textField {
  margin-left: 10px;
}

.nameFlex {
  padding: 15px;
}
.title--AppleID {
  font-size: xx-large;
}
.subTitle--AppleID {
  font-size: 17px;
  max-width: 550px;
  text-align: center;
}
.commanStyle {
  width: 40%;
  margin: 0px auto;
  height: 370px;
}
.formCard {
  width: 80%;
  height: 90vh;
}
nav {
  display: flex;
  justify-content: flex-end;
}
nav a {
  padding: 10px;
  font-size: 12px;
  color: black;
  text-decoration: none;
}

nav a:hover {
  color: #2079d2;
}

.titleContainer {
  padding: 5px;
  width: 68%;
  height: 50px;
  margin: 0 auto;
}
.title--text {
  font-size: x-large;
}
</style>
