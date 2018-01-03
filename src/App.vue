<template>
  <div id="app">
    <div class="gridcontainer">
            <div class="gridheader">HEADER</div>
            <div class="gridmenu">MENU</div>
            <div class="gridcontent"><router-view/></div>
            <div class="gridfooter">FOOTER</div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./assets/style.css">

</style>
