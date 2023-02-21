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
                @blur="$v.formData.firstname.$touch()"
              />
              <label class="form-label" for="FullName">Full Name</label>
              <span v-if="$v.formData.firstname.$error">
                <p class="errorMessage" v-if="!$v.formData.firstname.required">
                  This field is required
                </p>
              </span>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                v-model="formData.email"
                placeholder="Email Id"
                @blur="$v.formData.email.$touch()"
              />
              <label class="form-label" for="EmailId">Email Id</label>
              <span v-if="$v.formData.email.$error">
                <p class="errorMessage" v-if="!$v.formData.email.required">
                  This field is required
                </p>
                <p class="errorMessage" v-if="!$v.formData.email.email">
                  Invalid Email
                </p>
              </span>
            </div>
            <div class="form-group form-div">
              <input
                type="text"
                class="form-control"
                v-model="formData.company"
                placeholder="Organization"
              />
              <label class="form-label" for="Organization">Organization</label>
            </div>
          </div>
          <div class="col-md-6 form-rt ms-5 col-12">
            <div class="justify-content-end form-group">
              <input
                type="text"
                class="form-control"
                v-model="formData.mobilephone"
                placeholder="Phone Number"
                @blur="$v.formData.mobilephone.$touch()"
              />
              <label class="form-label" for="PhoneNumber">Phone Number</label>
              <span v-if="$v.formData.mobilephone.$error">
                <div class="d-flex">
                  <p
                    class="ms-2 errorMessage"
                    v-if="!$v.formData.mobilephone.required"
                  >
                    This field is required
                  </p>
                  <p
                    class="ms-2 errorMessage"
                    v-if="!$v.formData.mobilephone.numeric"
                  >
                    Only Digit *
                  </p>
                  <p
                    class="ms-3 errorMessage"
                    v-if="!$v.formData.mobilephone.minLength"
                  >
                    10 Digit phone number is mandatory
                  </p>
                  <p
                    class="ms-3 errorMessage"
                    v-if="!$v.formData.mobilephone.maxLength"
                  >
                    10 Digit phone number is mandatory
                  </p>
                </div>
              </span>
            </div>

            <div class="justify-content-end form-group">
              <input
                type="text"
                class="form-control"
                id="messageBox"
                placeholder="Message"
                v-model="formData.message"
              />
              <label class="form-label-m" for="inputPassword">Message</label>
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
            :disabled="$v.$invalid"
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
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

Vue.use(Vuelidate);

export default {
  name: "SignupForm",
  data: function () {
    return {
      formData: {
        firstname: null,
        email: null,
        mobilephone: "",
        company: "",
        message: "",
      },
      msgSuccess: false,
      msgFailed: false,

      HUBSPOT_PORTALID: 23478936,
      HUBSPOT_FORMGUID: "6c21b7de-88f2-4a19-b9ab-92bf85fb3061",
    };
  },
  validations: {
    formData: {
      firstname: {
        required,
      },
      email: {
        required,
        email,
      },
      mobilephone: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
    },
  },

  methods: {
    resetForm: function () {
      this.formData.firstname = "";
      this.formData.email = "";
      this.formData.mobilephone = "";
      this.formData.company = "";
      this.formData.message = "";
    },
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
                name: "email",
                value: this.formData.email,
              },
              {
                name: "mobilephone",
                value: this.formData.mobilephone,
              },
              {
                name: "company",
                value: this.formData.company,
              },
              {
                name: "message",
                value: this.formData.message,
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

        this.$v.$reset();

        console.log("res", res);
      } catch (err) {
        this.msgFailed = true;
        this.msgSuccess = false;
      }
      this.resetForm();
    },
  },
};
</script>

<style>
#contactUs {
  border: 1px solid #949494;
}

.errorMessage {
  font-size: 14px;
  color: red;
}
#messageBox {
  height: 130px;
  text-align: start;
}
.form-label {
  position: relative;
  top: -30px;
  left: 13px;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
}
.form-group {
  position: relative;
}
.form-label-m {
  position: relative;
  top: -120px;
  left: 13px;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
}
.form-group ::placeholder {
  opacity: 0;
}
.form-control:hover ~ .form-label,
.form-control:not(:placeholder-shown).form-control:not(:hover) ~ .form-label {
  top: -53px;
  font-size: 16px;
  background: #ffff;
}
.form-control:hover ~ .form-label-m,
.form-control:not(:placeholder-shown).form-control:not(:hover) ~ .form-label-m {
  top: -142px;
  font-size: 16px;
  background: #ffff;
}
.w-sub-button {
  width: 163px;
}
.form-rt {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-border {
  color: #3a5467;
  font-size: 42px;
  font-weight: 600;
  margin-top: -25px;
  background: white;
  width: 41%;
}

@media (max-width: 770px) {
  .form-main-div {
    display: block !important;
  }
  .form-rt {
    margin-left: 0 !important;
  }
  #contactUs {
    border: none;
  }
  .form-border {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .form-border {
    width: 50%;
  }
}
</style>
