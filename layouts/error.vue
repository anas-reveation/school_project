<template>
  <div v-if="error.statusCode === 404">
    <div class="container my-5">
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div>
            <img src="../assets/img/404.png" class="w-100" />
            <h1 class="fw-bold secondary text-center">Error!</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "error", // you can set a custom layout for the error page
  props: ["error"],
};
</script>
