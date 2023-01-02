<template>
  <div>
    <div
      class="container py-5"
      style="box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.09)"
    >
      <img
        src="../assets/img/element1.png"
        class="position-absolute"
        alt="Elements"
        style="margin-top: -42px"
      />
      <div class="row justify-content-center gy-4">
        <div class="col-md-6 col-lg-4 col-12 d-flex justify-content-center">
          <div class="test-img special-treat">
            <img
              src="../assets/img/special-d.svg"
              alt="Special Services"
              class="p-3"
            />
          </div>
        </div>
        <div class="col-md-6 col-lg-7 col-12">
          <div>
            <h2 class="fw-bold secondary">
              We have Our special <span class="primary">Dental Treatments</span>
            </h2>
            <p>
              Want to get special treatment? Reach out to us for personalized
              treatment at an affordable cost
            </p>
          </div>
          <div class="mt-5 pt-3">
            <nuxt-link
              to="/speciality"
              class="bg-primary-color text-decoration-none btn-special hover-speciality light-anc"
              style="border-radius: 21px; padding: 12px 30px 12px 5px"
            >
              <span
                class="p-2"
                style="background-color: var(--light); border-radius: 19px"
                ><img
                  src="../assets/img/arrow-right.svg"
                  alt="Arrow Redirect"
                />
              </span>
              <span class="ps-1 fw-semibold"> Check Our Special Treatment</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <img
        src="../assets/img/element2.png"
        class="d-md-block d-none"
        alt="Elements"
        style="position: absolute; margin-left: 25rem; margin-top: -1rem"
      />
    </div>
  </div>
</template>
