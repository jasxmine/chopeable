<template>
  <a
    :href="obj.url.slice(33, obj.url.indexOf('?'))"
    style="text-decoration: none; color: black; margin-bottom: 5px"
  >
    <div
      class="card"
      style="
        box-shadow: 0px 1.2px 1.2px 1.2px #888888;
        padding: 2px 0px 2px 18px;
        border-radius: 0%;
      "
    >
      <div class="card-horizontal">
        <div class="row">
          <div class="img-square-wrapper">
            <img
              class=""
              :src="obj.featured_image"
              alt="Card image cap"
              width="300"
              height="180"
            />
          </div>
          <div class="card-body">
            <h4 class="card-title">
              <strong> {{ obj.name }} </strong>
            </h4>
            <p
              class="card-text text-justify"
              style="width: 700px; overflow-wrap: break-word"
            >
              <span style="overflow-wrap: break-word">
                <strong> Address: </strong> {{ obj.location.address }}
              </span>
              <br />
              <span style="overflow-wrap: break-word">
                <strong> Cuisine Type: </strong> {{ obj.cuisines }}
              </span>
              <br />
              <span style="overflow-wrap: break-word">
                <strong> Opening Times: </strong> {{ obj.timings }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['obj'],
}
</script>

<style scoped>
.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}
.card:hover {
  background-color: rgb(240, 240, 240);
}
</style>
