<template>
  <div>
    <BannerHome />
    <FeatureHome />
    <HomeAbout class="psm-4 mtsm" />
    <Services class="psm-4 mtsm" />
    <ChooseUs class="" />
    <MiddleBanner class="mtsm" />

    <div class="container psm-4">
      <div class="row gy-4 overflow-hidden align-items-center">
        <div class="col-xl-6">
          <h6 class="secondary text-md-start text-center">Testimonial</h6>
          <h2 class="fw-bold text-md-start text-center secondary">
            Happy Patients with <span class="primary">Satisfaction words</span>
          </h2>
          <div
            id="carouselExampleControlsNoTouching"
            class="container carousel slide"
            data-bs-touch="false"
            data-bs-interval="false"
          >
            <div class="row">
              <div class="col-md-12 carousel-inner">
                <div
                  class="carousel-item active"
                  v-for="(review, index) in reviews"
                  :key="index"
                >
                  <Testimonial
                    class="mtsm"
                    :reviewName="review.name"
                    :descriptionBody="review.description"
                    :diagnoseName="review.diagnose"
                  />
                </div>
              </div>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
                style="position: relative !important"
              >
                <a class="text-decoration-none primary" style="font-weight: 500"
                  >Next <i class="fa fa-arrow-right ml-2" aria-hidden="true"></i
                ></a>
              </button>
            </div>
          </div>
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
              <img src="../assets/img/test-1.svg" class="test-img1" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Profession class="mbsm" />
    <OurDoctors class="mtsm" />
    <Blogs class="mtsm mbsm" />
    <Contact class="mtsm" style="margin-bottom: 4rem !important" />
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import BannerHome from "~/components/BannerHome.vue";
import Blogs from "~/components/Blogs.vue";
import ChooseUs from "~/components/ChooseUs.vue";

export default {
  name: "IndexPage",
  components: { BannerHome, ChooseUs, Blogs },
  props: {
    review: {
      type: Object,
      default: () => {},
    },
  },
  async asyncData({ $sanity }) {
    const query = groq`*[_type == "review"]`;

    const reviews = await $sanity.fetch(query);

    return { reviews };
  },
};
</script>
