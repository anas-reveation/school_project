<template>
  <div>
    <div class="bg-service">
      <div class="container">
        <div class="row">
          <div
            class="col-md-12 d-flex justify-content-center text-center flex-column align-items-center"
            data-aos="zoom-in"
            data-aos-duration="400"
          >
            <h1 class="text-white">Treatment</h1>
            <h1 class="primary fw-bold bann-h1 text-center">
              Get the best dental treatment
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5 psm-4" style="margin-top: 5rem !important">
      <h2 class="fw-bold secondary text-center mb-5">
        Choose us to get the
        <span class="primary">best treatment</span>
      </h2>
      <div class="row gy-3 align-items-md-center align-items-lg-start">
        <div class="col-md-12">
          <div class="galleries">
            <img
              src="../assets/img/tgallery.svg"
              alt="Vardan’s Infrastructure"
              data-aos="zoom-in"
              data-aos-duration="400"
              style="width: 100%; height: 100%"
            />
          </div>
          <p class="mt-5 text-center text-md-start">
            Vardan's core advantages come from a comprehensive, state-of-the-art
            infrastructure. Our clinic is adequately set up, with well-equipped
            machinery, a clean, hygienic environment, and appropriate facilities
            provided to the patients. We have highly qualified staff who are
            friendly.
          </p>
        </div>
      </div>
    </div>
    <div class="container mb-5 mt-5 pt-3">
      <h2 class="fw-bold secondary mb-5 text-center">Our Treatment Images</h2>
      <div v-for="(treatment, index) in treatments" :key="index">
        <WisdomTreatment
          class="mt-5"
          :tittle="treatment.tittle"
          :before="treatment.before.asset._ref"
          :after="treatment.after.asset._ref"
          :altBefore="treatment.altbe"
          :altAfter="treatment.altaf"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { groq } from "@nuxtjs/sanity";
export default {
  props: {
    treatment: {
      type: Object,
      default: () => {},
    },
  },
  async asyncData({ $sanity }) {
    const query = groq`*[_type == "treatment"]`;

    const treatments = await $sanity.fetch(query);

    return { treatments };
  },
  head: {
    title: "Our Infrastructure - Vardan Dental Clinic & Implant Centre",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "We offer the patients the right amenities, have well-maintained equipment, and a clean, hygienic environment. Friendly and knowledgeable employees work for us.",
      },
      {
        name: "keywords",
        content:
          "Our Infrastructure, Vardan Photo Gallery, well-equipped machinery, hygienic environment, Oral Implants and Reconstructive Dentistry, highly qualified experts, healthy smile",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Our Infrastructure - Vardan Dental Clinic & Implant Centre",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://vardandental.in/infrastructure",
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
          "We offer the patients the right amenities, have well-maintained equipment, and a clean, hygienic environment. Friendly and knowledgeable employees work for us.",
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
        content: "Our Infrastructure - Vardan Dental Clinic & Implant Centre",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "We offer the patients the right amenities, have well-maintained equipment, and a clean, hygienic environment. Friendly and knowledgeable employees work for us.",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://vardandental.in/infrastructure",
      },
    ],
  },
};
</script>
