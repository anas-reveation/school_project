<template>
  <div class="container psm-4">
    <div class="row gy-4 overflow-hidden">
      <div class="col-xl-6">
        <h6 class="secondary text-md-start text-center">Testimonial</h6>
        <h2 class="fw-bold text-md-start text-center secondary">
          Happy Patients with <span class="primary">Satisfaction words</span>
        </h2>
        <div class="p-3 mt-4 mb-2" style="background-color: var(--bg-element)">
          <p>
            {{ review.description }}
          </p>
          <p class="secondary fw-semibold">
            <span class="primary">{{ review.name }}</span> ({{
              review.diagnose
            }})
          </p>
        </div>
        <a
          href="#"
          class="text-decoration-none primary"
          style="font-weight: 500"
          >Next <i class="fa fa-arrow-right ml-2" aria-hidden="true"></i
        ></a>
      </div>
      <div
        class="col-xl-6 test-img"
        data-aos="fade-left"
        data-aos-duration="400"
      >
        <div class="row">
          <div class="col-md-6 col-6">
            <img src="../assets/img/test-3.svg" />
          </div>
          <div class="col-md-6 col-6 text-end text-md-start">
            <img src="../assets/img/test-2.svg" class="test-img1" />
          </div>
          <div class="col-md-6 col-12 text-md-end text-center">
            <img :src="review.img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
