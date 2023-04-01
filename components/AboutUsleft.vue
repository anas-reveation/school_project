<template>
  <div class="bg-tertiary-color">
    <div class="container">
      <div class="row py-5 align-items-center justify-content-around gy-4">
        <div class="col-md-4">
          <img
            src="../assets/img/school.avif"
            alt="aboutschool"
            class="w-100"
            style="border: 8px solid white"
          />
        </div>
        <div class="col-md-7">
          <h2 class="text-white">{{ standard }} SCHOOLing</h2>
          <p class="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            debitis aliquid expedita, iste maxime voluptates, dignissimos porro
            quis id repudiandae, eius explicabo perspiciatis. Facere, soluta.
            Harum libero in dolor omnis!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    standard: String,
  },
};
</script>
