<template>
  <div class="bg-secondary-color" style="background-color: var(--tertiary)">
    <div class="container">
      <div class="row py-5 align-items-center justify-content-around">
        <div class="col-md-4">
          <img
            src="../assets/img/school.avif"
            alt="aboutschool"
            class="w-100"
          />
        </div>
        <div class="col-md-7">
          <h2>{{ standard }} SCHOOL</h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            debitis aliquid expedita, iste maxime voluptates, dignissimos porro
            quis id repudiandae, eius explicabo perspiciatis. Facere, soluta.
            Harum libero in dolor omnis!
          </h5>
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
