<template>
  <div>
    <BannerHome />
    <FeatureHome />
    <HomeAbout class="psm-4" />
    <Services class="psm-4" />
    <ChooseUs />
    <MiddleBanner />
    <Testimonial :review="review" />
    <Profession />
    <OurDoctors />
    <Blogs />
    <Contact style="margin-bottom: 4rem !important" />
  </div>
</template>

<script>
import BannerHome from "~/components/BannerHome.vue";
import Blogs from "~/components/Blogs.vue";
import ChooseUs from "~/components/ChooseUs.vue";

export default {
  name: "IndexPage",
  components: { BannerHome, ChooseUs, Blogs },
  data() {
    return {
      review: {
        name: "Shakib Hassan",
        description:
          "Dental care is the maintenance of healthy teeth and the practice of keeping the mouth and teeth clean pur sue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone",
        diagnose: "Root Canals",
        img: "/_nuxt/assets/img/test-1.svg",
      },
    };
  },
};
</script>
