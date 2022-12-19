<template>
  <div>
    <div class="container">
      <div class="text-center my-5">
        <h2 class="fw-bold">
          Choose us for the <span class="primary">best treatment</span>
        </h2>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 col-12 bg-ChooseUsAbout">
          <div class="container">
            <div class="row py-5 justify-content-end">
              <div class="col-md-11">
                <h2 class="text-white fw-semibold">
                  Great reasons for people to choose
                  <span class="primary">Vardan Dental Clinic</span>
                </h2>
              </div>
              <div class="col-md-11 text-white py-3">
                <p>
                  Lorem ipsum dolor sit amet consectur adipicing elit sed do
                  esmod tempor incididunt labore aliqua
                </p>
              </div>
              <div
                class="row gy-5 mt-4 col-md-11 col-12 text-white justify-content-between"
              >
                <div
                  class="col-md-5 col-12"
                  data-aos="fade-in"
                  data-aos-duration="400"
                >
                  <h4>Quality Staff</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectur adipicing elit sed do
                    esmod tempor incididunt labore aliqua
                  </p>
                </div>
                <div
                  class="col-md-5 col-12"
                  data-aos="fade-in"
                  data-aos-duration="400"
                >
                  <h4>Best Doctors</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectur adipicing elit sed do
                    esmod tempor incididunt labore aliqua
                  </p>
                </div>
                <div
                  class="col-md-5 col-12"
                  data-aos="fade-in"
                  data-aos-duration="400"
                >
                  <h4>Affordable Price</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectur adipicing elit sed do
                    esmod tempor incididunt labore aliqua
                  </p>
                </div>
                <div
                  class="col-md-5 col-12"
                  data-aos="fade-in"
                  data-aos-duration="400"
                >
                  <h4>Optimized Solutions</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectur adipicing elit sed do
                    esmod tempor incididunt labore aliqua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12 bg-chooseleft"></div>
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
