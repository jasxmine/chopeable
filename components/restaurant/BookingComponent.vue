<template>
  <div class="dropdown">
    <div class="input-group" data-toggle="dropdown">
      <input
        id="diners-field"
        type="text"
        name="diners"
        value="2 Adults "
        class="form-control"
        readonly=""
      />
      <span class="input-group-addon icon-person"></span>
    </div>
    <div id="diners-drop" class="dropdown-menu">
      <div class="sb-top">
        <a href="" class="close">× </a>
      </div>
      <div class="input-group">
        <label for="adults">Adults</label>
        <select id="adults" name="adults_" class="form-control">
          <option value="2" selected="">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <span class="input-group-addon icon-drop"></span>
      </div>
      <div class="input-group">
        <label for="children">Children</label>
        <select id="children" name="children_" class="form-control">
          <option value="0" selected="">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <span class="input-group-addon icon-drop"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingComponent',
}
</script>

<style scoped></style>
