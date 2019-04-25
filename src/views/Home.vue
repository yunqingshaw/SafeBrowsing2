<template>
  <div class="home" >
    <Blacklist v-on:url-unsafe="changeSafe(false)" v-on:url-safe="changeSafe(true)"/>
    <div class='status' v-bind:style='bgc'>
      <p>{{statusMsg}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/views/Login.vue'
import Blacklist from '@/views/Blacklist.vue'

export default {
  name: "home",
  components: {
    Blacklist
  },
  data() {
    return {
      statusMsg: "",
      bgc: {
        backgroundColor: "",
        color: ""
      }
    };
  },
  methods: {
    changeSafe(cond) {
      this.bgc.backgroundColor = cond ? "green" : "red";
      this.bgc.color = 'yellow';
      this.statusMsg = cond ? "This Site is Safe" : "This Site is Dangerous";
    }
  }
};
</script>

<style scoped>
p {
  color: #ccc;
  text-align: center;
  font-size: 40px;
  padding-top: 50px;
  padding-bottom: 100%;
}
.status {
  height: 150px;
  width: 500px;
  margin: auto;
}
</style>