<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light py-3"
      style="background-color: var(--bg-grey)"
    >
      <div class="container">
        <a href="/"
          ><img
            src="../assets/img/school.png"
            style="width: 128px"
            alt="Vardan Logo"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="myFunction()"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav-sm">
            <li class="nav-item pe-3" @click="myFunction()">
              <nuxt-link to="/" class="nav-link text-dark" exact
                >Home</nuxt-link
              >
            </li>
            <hr
              class="d-block d-md-none mt-1 mb-3"
              style="
                opacity: 1;
                width: 100%;
                border-top: 1px solid rgba(188, 188, 188, 0.5);
              "
            />
            <!-- <li class="nav-item pe-3">
              <nuxt-link
                to="/servicedetail"
                class="nav-link text-dark"
                aria-current="page"
                >Services</nuxt-link
              >
            </li> -->

            <hr
              class="d-block d-md-none mt-1 mb-3"
              style="
                opacity: 1;
                width: 100%;
                border-top: 1px solid rgba(188, 188, 188, 0.5);
              "
            />
            <li class="nav-item pe-3" @click="myFunction()">
              <nuxt-link
                to="/aboutus"
                class="nav-link text-dark"
                aria-current="page"
              >
                About Us
              </nuxt-link>
            </li>
            <hr
              class="d-block d-md-none mt-1 mb-3"
              style="
                opacity: 1;
                width: 100%;
                border-top: 1px solid rgba(188, 188, 188, 0.5);
              "
            />
            <li class="nav-item dropdown pe-3" @click="myFunction3()">
              <a
                class="nav-link dropdown-toggle text-dark"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gallery
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
                id="dropdown-3"
              >
                <li @click="myFunction1()">
                  <nuxt-link class="dropdown-item" to="/infrastructure"
                    >Infrastructure</nuxt-link
                  >
                </li>
                <li @click="myFunction1()">
                  <nuxt-link class="dropdown-item" to="/treatmentgallery"
                    >Treatment</nuxt-link
                  >
                </li>
              </ul>
            </li>
            <hr
              class="d-block d-md-none mt-1 mb-3"
              style="
                opacity: 1;
                width: 100%;
                border-top: 1px solid rgba(188, 188, 188, 0.5);
              "
            />
            <li class="nav-item pe-3" @click="myFunction()">
              <nuxt-link class="nav-link text-dark" to="/dentists"
                >Founder's Message</nuxt-link
              >
            </li>
            <hr
              class="d-block d-md-none mt-1 mb-3"
              style="
                opacity: 1;
                width: 100%;
                border-top: 1px solid rgba(188, 188, 188, 0.5);
              "
            />
            <li class="d-lg-block d-none">
              <button
                type="button"
                class="btn tertiary-bg button-h rounded-0 btn-small"
                style="font-weight: 600"
              >
                <a href="tel: +91-9824038971" class="anc" target="_blank"
                  >Contact Us</a
                >
              </button>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSubNavServiceOpen: false,
    };
  },
  methods: {
    myFunction() {
      const y = document.getElementById("navbarSupportedContent");
      if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        y.style.display = "block";
      }
    },
    myFunction2() {
      const z = document.getElementById("dropdown-2");
      if (z.style.display === "block") {
        z.style.display = "none";
      } else {
        z.style.display = "block";
      }
    },
    myFunction1() {
      const y = document.getElementById("navbarSupportedContent");
      if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        y.style.display = "block";
      }
    },
    myFunction3() {
      const z = document.getElementById("dropdown-3");
      if (z.style.display === "block") {
        z.style.display = "none";
      } else {
        z.style.display = "block";
      }
    },
  },
};
</script>

<style>
#navbarSupportedContent a.nuxt-link-active {
  font-weight: bold;
  color: var(--primary) !important;
}
.dropdown-item.active,
.dropdown-item:active {
  background-color: var(--primary);
}
#navbarSupportedContent a.nuxt-link-exact-active {
  font-weight: bold;
  color: var(--dashed-img);
} /* exact link will show the primary color for only the exact matching link */ ;
</style>
