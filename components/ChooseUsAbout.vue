<template>
  <div class="my-5 pt-3">
    <div class="container">
      <div class="text-center my-5">
        <h2 class="fw-bold">
          Choose us for the <span class="primary">best treatment</span>
        </h2>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-8 col-12 bg-ChooseUsAbout">
          <div class="container">
            <div class="row py-5 justify-content-end">
              <div class="col-md-12 col-lg-11">
                <h2 class="text-white fw-semibold">
                  Great Reasons to Choose

                  <span class="primary">Vardan Dental Clinics</span>
                </h2>
              </div>
              <div class="col-md-12 col-lg-11 text-white py-3">
                <p>Caring, highly trained clinical dental team.</p>
              </div>
              <div
                class="row gy-5 mt-4 col-md-12 col-lg-11 col-12 text-white justify-content-between"
              >
                <div
                  class="col-md-5 col-12"
                  data-aos="fade-in"
                  data-aos-duration="400"
                >
                  <h4>24-hour assistance</h4>
                  <p>
                    Why should we when neither you nor your toothache has days
                    off? We know that many of you need help managing your time
                    throughout the workweek or that an unplanned dental
                    emergency is inappropriate.
                  </p>
                </div>
                <div
                  class="col-md-5 col-12"
                  data-aos="fade-in"
                  data-aos-duration="400"
                >
                  <h4>Time versatility</h4>
                  <p>
                    We know that doing domestic duties can leave you with very
                    little time for personal care. To ensure that you always
                    attend a dental appointment, we kindly assist you by
                    allowing you to select the appointment times that work best
                    for you.
                  </p>
                </div>
                <div
                  class="col-md-5 col-12"
                  data-aos="fade-in"
                  data-aos-duration="400"
                >
                  <h4>Affordable Price</h4>
                  <p>
                    We know that dental care can be expensive due to the
                    sophisticated technology and tools employed. But we want the
                    cost of dental treatment to ensure you get it right now.
                    Vardan provides you the affordable service.
                  </p>
                </div>
                <div
                  class="col-md-5 col-12"
                  data-aos="fade-in"
                  data-aos-duration="400"
                >
                  <h4>High-Quality Care</h4>
                  <p>
                    To deliver the most significant evidence-based treatments
                    and the newest procedures to our clinic, our dentists
                    regularly attend continuing education courses and stay up to
                    date on the most recent research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12 d-md-none d-lg-block bg-chooseleft"></div>
      </div>
    </div>
    <FeatureHome />
  </div>
</template>

<style>
.bg-ChooseUsAbout {
  background-image: linear-gradient(
      257.87deg,
      rgba(16, 97, 111, 0.85) -14.38%,
      rgba(14, 31, 34, 0.85) -0.16%
    ),
    url(/_nuxt/assets/img/chooseusbg.svg);
  background-size: cover;
  background-position: center;
}
.bg-chooseleft {
  background-image: url(../assets/img/chooseusabout.svg);
  background-size: cover;
  background-position: center;
}
.bg-ChooseUsAbout h4 {
  font-weight: 700;
}
</style>
