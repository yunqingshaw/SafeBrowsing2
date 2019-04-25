<template>
  <div class="blacklist">
    <p>Checking: {{url}}</p>
    <input class="urlBox" v-model="url" placeholder="Enter URL" @keyup.enter="checkBlacklist">
    <button class="btn" @click="checkBlacklist">Check</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "blacklist",
  components: {},
  data() {
    return {
      url: "honourableud.top"
    };
  },
  methods: {
    checkBlacklist() {
      console.log('clicked');
      let body = {
        client: {
          clientId: "safe-browse-url-lookup",
          clientVersion: "1.0.0"
        },
        threatInfo: {
          threatTypes: [
            "MALWARE",
            "SOCIAL_ENGINEERING",
            "UNWANTED_SOFTWARE",
            "POTENTIALLY_HARMFUL_APPLICATION",
            "THREAT_TYPE_UNSPECIFIED"
          ],
          platformTypes: ["ANY_PLATFORM"],
          threatEntryTypes: ["URL"],
          threatEntries: [{ url: this.url }]
        }
      };
      //AIzaSyCvT_fhf_--ZppsPDJX_djwq1hAd3txqnM
      //UNSAFE directxex.com/uploads/1835173533.ms.exe?dl=1
      axios
        .post(
          "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyBzCc_Ta0s4BzLJo9aiqMXbFlwsyoGcIdU",
          body
        )
        .then(res => {
          if (res.data.hasOwnProperty("matches")) {
            this.$emit("url-unsafe");
            //alert('unsafe');
          } else {
            this.$emit("url-safe");
            //alert('safe');
          }
        })
        .catch(err => alert(err));
      //console.log(this.url);
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  margin-left: 10px;
  cursor: pointer;
}
.urlBox {
  padding: 10px;
  border-radius: 10px;
}
</style>
