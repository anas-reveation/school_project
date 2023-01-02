<template>
  <div class="container psm-4 mb-5 pb-4">
    <div class="text-center mb-5">
      <p>Frequently asked questions</p>
      <h2 class="fw-bold secondary mb-3">
        <span class="primary">Everything</span> you need <br />
        to know
      </h2>
      <img
        src="../assets/img/accord-element.svg"
        class="position-absolute d-md-block d-none accord-elem"
        style="margin-top: -144px; margin-left: 52rem"
        alt="Eelements"
      />
    </div>
    <div class="row gy-4">
      <div class="col-lg-12 col-xl-5 col-md-12 col-12">
        <div>
          <img
            src="../assets/img/Accord.svg"
            alt="Frequently asked questions"
            style="width: 100%; height: 100%"
          />
        </div>
      </div>
      <div class="col-lg-12 col-xl-7 col-md-12 col-12">
        <div class="accordion accord" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Am I the right candidate for a dental implant?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                If you want to replace missing teeth, you are the right
                candidate for dental Implants. Vardan Dental is dedicated to
                providing high-quality, long-lasting restorations by utilising
                the most cutting-edge technologies.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Are dental implants affordable?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Yes, dental implants can be very affordable, depending on the
                situation. A few factors go into the cost of dental implants,
                such as the type of implant needed, the complexity of the
                procedure, and any additional treatments that may be required.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Is the Root Canal Treatment painful?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Endodontics, often known as root canal therapy, is a dental
                technique used to treat infections inside the teeth. A tooth
                that might otherwise need to be extracted can be saved using
                root canal therapy, which is not painful.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                When can I resume work after the root canal procedure?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Following their root canal operation, patients should plan to
                rest, and the majority can return to work the next day. Our
                bodies require adequate healing time, which varies depending on
                the patient.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Is Teeth Whitening treatment permanent?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                No, teeth whitening doesn't last a lifetime. However, the
                whitening results should last up to three years if your teeth
                are correctly cared for.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
