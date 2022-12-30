<template>
  <div class="my-5">
    <div
      class="container psm-4 des-serv"
      style="margin-top: 7rem; margin-bottom: 4rem"
    >
      <div class="col-12">
        <div class="row justify-content-around gy-4 overflow-hidden">
          <div
            class="col-md-12 col-lg-6 col-12"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            <div class="sd-bg-1 sd-bg">
              <img
                src="../assets/img/profession.png"
                alt="Best Dental Care in Ahmedabad"
                class="w-100"
              />
            </div>
          </div>
          <div
            class="col-lg-5 col-md-12 col-12"
            data-aos="fade-left"
            data-aos-duration="400"
          >
            <h6 class="text-center">Best Dental Care</h6>
            <h2
              class="fw-bold secondary text-center text-md-center text-lg-start"
            >
              We Make Your <span class="primary">Smile Beautiful</span>
            </h2>
            <P style="text-align: justify"
              >At Vardan Dental, we strive to provide every patient with the
              dental care they require. In keeping with this and our dedication
              to providing the finest calibre dental treatment, we offer a vast
              array of services that span the whole dental spectrum.
            </P>
            <P class="primary" style="text-align: justify"
              >We sincerely care about your dental health and general
              well-being. Thus, our Vardan dental care facility is more than
              just a clinic.</P
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5 py-4 mtsm serv-detail">
      <h2 class="fw-bold secondary text-center text-center">
        Our <span class="primary">Best</span> Services
      </h2>
      <div class="" style="margin-bottom: -2rem">
        <h4>Services</h4>
        <hr
          style="width: 15%; border-top: 3px solid var(--primary); opacity: 1"
        />
      </div>
      <div class="row overflow-hidden mt-5 gy-4">
        <ul
          class="nav nav-pills s-tab mb-3 d-block col-md-12 col-xl-4 col-lg-12"
          id="pills-tab"
          role="tablist"
          data-aos="fade-right"
          data-aos-duration="400"
        >
          <div class="p-3" style="background-color: #f2fafc">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home, #pills-homes"
                type="button"
                role="tab"
                aria-controls="pills-home, pills-homes"
                aria-selected="true"
              >
                Dental Implant
              </button>
            </li>
            <li class="nav-item mt-3" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Root Canal Treatment
              </button>
            </li>
            <li class="nav-item mt-3" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Teeth Whitening
              </button>
            </li>
            <li class="nav-item mt-3" role="presentation">
              <button
                class="nav-link"
                id="pills-ortho-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-ortho"
                type="button"
                role="tab"
                aria-controls="pills-ortho"
                aria-selected="false"
              >
                Orthodontic Treatment
              </button>
            </li>
            <li class="nav-item mt-3" role="presentation">
              <button
                class="nav-link"
                id="pills-aligner-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-aligner"
                type="button"
                role="tab"
                aria-controls="pills-aligner"
                aria-selected="false"
              >
                Clear Aligners Treatment
              </button>
            </li>
            <li class="nav-item mt-3" role="presentation">
              <button
                class="nav-link"
                id="pills-wisdom-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-wisdom"
                type="button"
                role="tab"
                aria-controls="pills-wisdom"
                aria-selected="false"
              >
                Wisdom Tooth Removal
              </button>
            </li>
            <li class="nav-item mt-3" role="presentation">
              <button
                class="nav-link"
                id="pills-smile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-smile"
                type="button"
                role="tab"
                aria-controls="pills-smile"
                aria-selected="false"
              >
                Smile Designing
              </button>
            </li>
            <li class="nav-item mt-3" role="presentation">
              <button
                class="nav-link"
                id="pills-flap-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-flap"
                type="button"
                role="tab"
                aria-controls="pills-flap"
                aria-selected="false"
              >
                Periodontal Flap Surgery
              </button>
            </li>
            <li class="nav-item mt-3" role="presentation">
              <button
                class="nav-link"
                id="pills-child-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-child"
                type="button"
                role="tab"
                aria-controls="pills-child"
                aria-selected="false"
              >
                Child Dental Care
              </button>
            </li>
            <li class="nav-item mt-3" role="presentation">
              <button
                class="nav-link"
                id="pills-cardio-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-cardio"
                type="button"
                role="tab"
                aria-controls="pills-cardio"
                aria-selected="false"
              >
                Cardiac Diabetic Dental Care
              </button>
            </li>
          </div>
        </ul>
        <div
          class="tab-content col-md-12 col-xl-8 col-lg-12"
          id="pills-tabContent"
          data-aos="fade-left"
          data-aos-duration="400"
        >
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <DentalServiceOne class="" />
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <RootCanal class="" />
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <TeethWhitening />
          </div>
          <div
            class="tab-pane fade"
            id="pills-ortho"
            role="tabpanel"
            aria-labelledby="pills-ortho-tab"
          >
            <Orthodontic />
          </div>
          <div
            class="tab-pane fade"
            id="pills-aligner"
            role="tabpanel"
            aria-labelledby="pills-aligner-tab"
          >
            <AlignersTreatment />
          </div>
          <div
            class="tab-pane fade"
            id="pills-wisdom"
            role="tabpanel"
            aria-labelledby="pills-wisdom-tab"
          >
            <WisdomTooth />
          </div>
          <div
            class="tab-pane fade"
            id="pills-smile"
            role="tabpanel"
            aria-labelledby="pills-smile-tab"
          >
            <SmileDesigning />
          </div>
          <div
            class="tab-pane fade"
            id="pills-flap"
            role="tabpanel"
            aria-labelledby="pills-flap-tab"
          >
            <Periodontal />
          </div>
          <div
            class="tab-pane fade"
            id="pills-child"
            role="tabpanel"
            aria-labelledby="pills-child-tab"
          >
            <ChildDental />
          </div>
          <div
            class="tab-pane fade"
            id="pills-cardio"
            role="tabpanel"
            aria-labelledby="pills-cardio-tab"
          >
            <CardioDental />
          </div>
        </div>
      </div>
    </div>
    <SpecialPage class="" />
  </div>
</template>
