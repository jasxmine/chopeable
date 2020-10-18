<template>
  <div>
    <br /><br /><br /><br /><br /><br />
    <div class="header">
      <br /><br /><br /><br /><br />

      <h3 class="white_text" style="font-size: 50px">
        Don't know what to eat?
      </h3>
      <h5
        class="white_text"
        style="margin-left: 42%; font-size: 25px; width: 250px"
      >
        discover, book, and dine with us
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    created() {
      const request = new XMLHttpRequest()
      request.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
          const parsed = JSON.parse(this.responseText)
          console.log(parsed)
        }
      }
      request.open(
        'GET',
        'https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=c&apikey=V9RImjwjM4y4T2GFlnwjdMJuIs3NoHV1',
        true
      )
      request.send()
    },
  },
}
</script>

<style>
li {
  margin-left: 20px;
  margin-right: 20px;
}
.header {
  background-image: url('../header_wallp.jpg');
  height: 400px;
  text-align: center;
}
.white_text {
  color: white;
  font-weight: bold;
}
</style>
