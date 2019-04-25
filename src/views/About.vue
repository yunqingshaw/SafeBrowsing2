
<template>
  <div id="about">
    <div class="wrapper" v-bind:style="bgc">
      <div class="content">
        <h1>{{description}}</h1>
        <input type="text" v-on:input="bgc.backgroundColor = $event.target.value">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description:
        "Type any colour name, rgb, hex or hsl in the input below and see what happens!",
      bgc: {
        backgroundColor: ""
      }
    };
  }
};
</script>

<style>
</style>
