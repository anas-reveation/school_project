<template>
  <div>
    <BannerHome />
    <FeatureHome />
    <HomeAbout class="psm-4" />
    <Services class="psm-4" />
    <ChooseUs />
    <MiddleBanner />
    <Testimonial />
    <Profession />
    <OurDoctors />
    <Contact />
    <Blogs />
  </div>
</template>

<script>
import BannerHome from "~/components/BannerHome.vue";
import ChooseUs from "~/components/ChooseUs.vue";

export default {
  name: "IndexPage",
  components: { BannerHome, ChooseUs },
};
</script>
