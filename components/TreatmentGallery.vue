import Orthodontic from './Orthodontic.vue'; import WisdomTreatment from
'./WisdomTreatment.vue';

<template>
  <div>
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
      <WisdomTreatment />
      <DentalTreatment class="mt-5" />
      <OrthodonticTreatment class="mt-5" />
      <ClearTreatment class="mt-5" />
    </div>
  </div>
</template>
