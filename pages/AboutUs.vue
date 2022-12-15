<template>
  <div>
    <AboutUsBanner />
    <BestDentalCare />
    <ChooseUsAbout />
    <MiddleBanner />
    <HeaderExtra />
  </div>
</template>

<script>
import BestDentalCare from "~/components/BestDentalCare.vue";
import AboutUsBanner from "~/components/AboutUsBanner.vue";

export default {
  name: "AboutUsPage",
  components: { BestDentalCare, AboutUsBanner },
};
</script>
