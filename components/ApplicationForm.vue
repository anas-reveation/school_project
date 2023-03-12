<template>
  <div id="contactUs" class="container mb-5 pb-4">
    <h2 class="mb-5 ms-3 pb-3 title-sm form-border">
      Let’s connect <span style="color: #abe0c7">with us</span>
    </h2>
    <form @submit.prevent="submitData" method="post">
      <div class="row g-3 contact-w justify-content-center">
        <div class="col-md-12 d-flex form-main-div">
          <div class="col-md-6 form-rt col-12">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="formData.firstname"
                placeholder="Full Name"
              />
              <label class="form-label" for="FullName">Full Name</label>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                v-model="formData.email"
                placeholder="Email Id"
              />
              <label class="form-label" for="EmailId">Email Id</label>
            </div>
            <div class="form-group form-div">
              <input
                type="text"
                class="form-control"
                v-model="formData.standard"
                placeholder="standard"
              />
              <label class="form-label" for="standard">standard</label>
            </div>

            <div class="form-group form-div">
              <select
                name="parent"
                class="form-control"
                v-model="formData.standard"
                required
              >
                <option value="" formData.standard></option>
                <option value="formData.standard">Item 1</option>
                <option value="item2">Item 2</option>
              </select>
              <label class="form-label" for="standard">standard</label>
            </div>
            <div class="form-group form-div">
              <input
                type="text"
                class="form-control"
                v-model="formData.sex"
                placeholder="sex"
              />
              <label class="form-label" for="sex">sex</label>
            </div>
          </div>
          <div class="col-md-6 form-rt ms-5 col-12">
            <div class="justify-content-end form-group">
              <input
                type="text"
                class="form-control"
                id="messageBox"
                placeholder="date of birth"
                v-model="formData.date_of_birth"
              />
              <label class="form-label-m" for="date of birth"
                >date of birth</label
              >
            </div>
            <div class="justify-content-end form-group">
              <input
                type="text"
                class="form-control"
                id="messageBox"
                placeholder="address"
                v-model="formData.address"
              />
              <label class="form-label-m" for="address">address</label>
            </div>
          </div>
        </div>

        <!-- START ALERT -->
        <div v-show="msgSuccess" class="alert alert-success" role="alert">
          <strong>Thank you</strong> we’ll get back with you as soon as
          possible.
        </div>
        <div v-show="msgFailed" class="alert alert-danger" role="alert">
          Please check all fields or try again later
        </div>
        <!-- END ALERT -->
        <div
          class="col-md-12 mt-0 d-flex justify-content-lg-end justify-content-center form-action"
        >
          <button
            type="submit"
            class="btn w-sub-button text-white"
            style="background-color: #1d3b53; margin-right: 20px"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

export default {
  name: "SignupForm",
  data: function () {
    return {
      formData: {
        firstname: null,
        standard: null,
        email: null,
        sex: null,
        date_of_birth: null,
        father_name: "",
        mother_name: "",
        address: "",
      },
      msgSuccess: false,
      msgFailed: false,

      HUBSPOT_PORTALID: 24134669,
      HUBSPOT_FORMGUID: "21d7b67f-269d-4868-8cf7-a6c87924b6b2",
    };
  },

  methods: {
    async submitData() {
      const portalId = this.HUBSPOT_PORTALID;
      const formGuid = this.HUBSPOT_FORMGUID;

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const res = await this.$axios.post(
          `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
          {
            portalId,
            formGuid,
            fields: [
              {
                name: "firstname",
                value: this.formData.firstname,
              },
              {
                name: "standard",
                value: this.formData.standard,
              },

              {
                name: "email",
                value: this.formData.email,
              },
              {
                name: "sex",
                value: this.formData.sex,
              },
              {
                name: "date_of_birth",
                value: this.formData.date_of_birth,
              },
              {
                name: "father_name",
                value: this.formData.father_name,
              },
              {
                name: "mother_name",
                value: this.formData.mother_name,
              },
              {
                name: "address",
                value: this.formData.address,
              },
            ],
          },
          config
        );
        this.msgSuccess = true;
        this.msgFailed = false;
        setInterval(() => {
          this.msgSuccess = null;
          this.msgFailed = null;
        }, 3000);

        console.log("res", res);
      } catch (err) {
        this.msgFailed = true;
        this.msgSuccess = false;
      }
    },
  },
};
</script>
