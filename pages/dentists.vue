<template>
  <div>
    <div class="bg-service">
      <div class="container">
        <div class="row">
          <div
            class="col-md-12 d-flex justify-content-center flex-column align-items-center"
            data-aos="zoom-in"
            data-aos-duration="400"
          >
            <h1 class="text-white">Our Dentists</h1>
            <h1 class="primary fw-bold bann-h1 text-center">
              Meet Our Best Dentists in Ahmedabad
            </h1>
          </div>
        </div>
      </div>
    </div>
    <OurDentist />
    <VisitingDoctor />
    <Contact style="margin-bottom: 4rem !important" />
  </div>
</template>
<script>
export default {
  head: {
    title: "Top Dentist - Vardan Dental Clinic & Implant Center",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Our dentists provide the best dental treatment in Ahmedabad. Dr. Ravi Patel, Dr. Urvashi Patel, and Dr. Ketul Patel provide quality dental care to all age groups.",
      },
      {
        name: "keywords",
        content:
          "Our Dentist, best dental and aesthetic services in ahmedabad, top dentist in Ahmedabad, Dr. Ravi Patel (MBBS, BDS), Dr. Urvashi Patel (MBBS, BDS), Dr. Ketul Patel (MBBS, BDS), Vardan Dental Clinic team",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Top Dentist - Vardan Dental Clinic & Implant Center",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.vardandental.in",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Our dentists provide the best dental treatment in Ahmedabad. Dr. Ravi Patel, Dr. Urvashi Patel, and Dr. Ketul Patel provide quality dental care to all age groups.",
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
        content: "Top Dentist - Vardan Dental Clinic & Implant Center",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Our dentists provide the best dental treatment in Ahmedabad. Dr. Ravi Patel, Dr. Urvashi Patel, and Dr. Ketul Patel provide quality dental care to all age groups.",
      },
    ],
  },
};
</script>
