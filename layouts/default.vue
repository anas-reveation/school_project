<template>
  <div class="">
    <HeaderExtra class="d-none d-md-block" />
    <Header></Header>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderTop from "~/components/HeaderTop.vue";

export default {
  head() {
    return {
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity:
            "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://code.jquery.com/jquery-migrate-3.4.0.js",
          integrity: "sha256-0Nkb10Hnhm4EJZ0QDpvInc3bRp77wQIbIQmWYH3Y7Vw=",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
          rel: "stylesheet",
        },
        {
          href: "https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css",
          rel: "stylesheet",
        },
      ],
      script: [
        { type: "application/ld+json", json: this.structuredData },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
          crossorigin: "anonymous",
        },
      ],
    };
  },
  mounted() {
    AOS.init({});
  },
  components: { HeaderTop },
  data() {
    return {
      structuredData: {
        "@context": "https://schema.org/",
        "@type": "Dentist",
        name: "Vardan Dental Clinic & Implant Center",
        image: "https://vardandental.in/_nuxt/img/Vardan-logo.5b34beb.svg",
        "@id": "",
        url: "https://vardandental.in",
        telephone: "+91-9898025261",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "T-8,9 Third floor, shubh complex, near rajasthan hospital, Shahibaug",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "380004",
          addressCountry: "IN",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:30",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    };
  },
};
</script>
