<script>
export default {
  name: 'FormComponent',
  data(){
    return{
    }
  }
}
</script>

<template>

<form class="row g-3">
  <div class="col-md-6">
    <input type="text" class="form-control" id="inputName" placeholder="Name">
  </div>
  <div class="col-md-6">
    <input type="email" class="form-control" id="inputEmail" placeholder="Email">
  </div>
  <div class="col-md-6">
    <input type="number" class="form-control" id="inputNumber" placeholder="Phone">
  </div>
  <div class="col-md-6">
    <select class="form-select">
      <option selected>More Info</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-12">
    <div class="input-group">
      <textarea class="form-control" placeholder="Message" rows="5"></textarea>
    </div>
  </div>
</form>
  
</template>

<style lang="scss" scoped>
// @use '../../styles/partials/mixin' as *;
@use '../../styles/partials/variables' as *;


input, textarea, select {
  background-color: tint-color($secondary, 60%);
}


</style>