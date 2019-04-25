import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import firebase_app from 'firebase/app'
import firebase from 'firebase'

Vue.config.productionTip = false;


//<script src="https://www.gstatic.com/firebasejs/5.10.0/firebase.js"></script>

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAc3f3F-n7YJLShDQkSUOywHpx6Wxz975k",
    authDomain: "vue-firebase-pro1.firebaseapp.com",
    databaseURL: "https://vue-firebase-pro1.firebaseio.com",
    projectId: "vue-firebase-pro1",
    storageBucket: "vue-firebase-pro1.appspot.com",
    messagingSenderId: "899368196374"
  };

  firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
