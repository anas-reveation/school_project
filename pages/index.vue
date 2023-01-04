<template>
  <div>
    <BannerHome />
    <FeatureHome />
    <HomeAbout class="psm-4 mtsm" />
    <Services class="psm-4 mtsm" />
    <ChooseUs id="home-section" class="" />
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
          >
            <div class="col-md-12 carousel-inner">
              <div
                class="carousel-item"
                :class="{ active: index == 0 }"
                v-for="(review, index) in reviews"
                :key="index"
              >
                <Testimonial
                  style="background-color: var(--bg-element)"
                  class="mtsm p-3 mt-4 mb-2"
                  :reviewName="review.name"
                  :descriptionBody="review.description"
                  :diagnoseName="review.diagnose"
                />
                <!-- <Testimonial
                  style="background-color: var(--bg-element)"
                  class="mtsm p-3 mt-4 mb-2"
                  :reviewName="review.name"
                  :descriptionBody="review.description"
                  :diagnoseName="review.diagnose"
                /> -->
              </div>
            </div>
            <button
              class="carousel-control-next next-btn"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
              style="position: relative !important"
            >
              <a class="text-decoration-none primary" style="font-weight: 500"
                >Next <i class="fa fa-arrow-right ml-2"></i
              ></a>
            </button>
          </div>
        </div>
        <div
          class="col-xl-6 test-img"
          data-aos="fade-left"
          data-aos-duration="400"
        >
          <div class="row">
            <div class="col-md-6 col-6">
              <img src="../assets/img/test-2.svg" alt="Happy Patients" />
            </div>
            <div class="col-md-6 col-6 text-end text-md-start">
              <img
                src="../assets/img/test-3.svg"
                alt="Happy Patients"
                class="test-img1"
              />
            </div>
            <div class="col-md-7 col-xl-7 col-lg-6 col-12 text-center">
              <img
                src="../assets/img/test-1.svg"
                style="left: 18%"
                alt="Happy Patients"
                class="test-img1"
              />
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
  head: {
    title: "Vardan Dental Clinic & Implant Center, Shahibaug, Ahmedabad",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Vardan Dental Clinic & Implant Center is committed to offering high volume, excellent dental care at affordable prices and has over 22 years of experience.",
      },
      {
        name: "keywords",
        content:
          "Vardan Dental Clinic & Implant Center, Shahibaug, Ahmedabad, Dental Care, dental clinic near me, Vardan Dental Treatment, Best Dentists, Medical Services, dental implants in India, teeth whitening near me",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Vardan Dental Clinic & Implant Center, Shahibaug, Ahmedabad",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.vardandental.in",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Vardan Dental Clinic & Implant Center is committed to offering high volume, excellent dental care at affordable prices and has over 22 years of experience.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://vardandental.in/_nuxt/img/Vardan-logo.5b34beb.svg",
      },

      { name: "twitter:site", content: "@VardanDental" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://vardandental.in/_nuxt/img/Vardan-logo.5b34beb.svg",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Vardan Dental Clinic & Implant Center, Shahibaug, Ahmedabad",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Vardan Dental Clinic & Implant Center is committed to offering high volume, excellent dental care at affordable prices and has over 22 years of experience..",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://vardandental.in/",
      },
    ],
  },
};
</script>
