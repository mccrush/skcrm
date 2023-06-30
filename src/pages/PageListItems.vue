<template>
  <div class="row">
    <div class="col-12 bg-white shadow-sm p-3">List</div>

    <div class="col-12 p-3">
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
          The current link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">A second link item</a>
      </div>
    </div>

    <div class="col-12">
      {{ $route.name }} -
      {{ $route.params.type }}
    </div>
  </div>
</template>

<script>
export default {

}
</script>