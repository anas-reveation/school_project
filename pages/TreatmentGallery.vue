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
              Best Dental Treatment Near Shahibaug
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5 psm-4" style="margin-top: 5rem !important">
      <h2 class="fw-bold secondary text-center mb-5">
        Get the latest pictures from
        <span class="primary">Vardan's Ahmedabad Dental Clinic</span>
      </h2>
      <div class="row gy-3 align-items-md-center align-items-lg-start">
        <div class="col-md-12">
          <div class="galleries">
            <img
              src="../assets/img/tgallery.svg"
              alt="Vardan’s Best Treatment"
              data-aos="zoom-in"
              data-aos-duration="400"
              style="width: 100%; height: 100%"
            />
          </div>
          <p class="mt-5 text-center text-md-start">
            We will always keep you up to date on the latest picture at our
            dental clinic. Furthermore, you will find more pictures related to
            our dental treatment. We provide advanced dental treatments and
            provisions to care for your smile. We have designed our Ahmedabad
            dental clinic to have a boutique-style ambiance and to provide
            treatments in a completely relaxing environment.
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
    title: "Best Dental Treatment Near Shahibaug - Vardan Dental Clinic",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "If you are looking for dental treatment near Shahibagh, Ahmedabad, Vardaan Dental Clinic is your best option. View our results after dental surgical treatment.",
      },
      {
        name: "keywords",
        content:
          "Best Dental Treatment Near Shahibaug, best treatment, dental treatment images, Wishdom Tooth Removal Images, Dental Implant Images, Orthodonic Treatment Images, Clear Aligners Treatment Images",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Best Dental Treatment Near Shahibaug - Vardan Dental Clinic",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://vardandental.in/treatmentgallery/",
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
          "Best Dental Treatment Near Shahibaug, best treatment, dental treatment images, Wishdom Tooth Removal Images, Dental Implant Images, Orthodonic Treatment Images, Clear Aligners Treatment Images",
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
        content: "Best Dental Treatment Near Shahibaug - Vardan Dental Clinic",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Best Dental Treatment Near Shahibaug, best treatment, dental treatment images, Wishdom Tooth Removal Images, Dental Implant Images, Orthodonic Treatment Images, Clear Aligners Treatment Images",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://vardandental.in/treatmentgallery/",
      },
    ],
  },
};
</script>
