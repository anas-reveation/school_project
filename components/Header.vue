<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light py-3">
      <div class="container">
        <a href="/"
          ><img
            src="../assets/img/Vardan-logo.svg"
            style="width: 203px; height: 48px"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item pe-3">
              <nuxt-link to="/" class="nav-link text-dark" exact
                >Home</nuxt-link
              >
            </li>
            <!-- <li class="nav-item pe-3">
              <nuxt-link
                to="/servicedetail"
                class="nav-link text-dark"
                aria-current="page"
                >Services</nuxt-link
              >
            </li> -->
            <li class="nav-item dropdown pe-3">
              <nuxt-link
                class="nav-link dropdown-toggle text-dark"
                to="/servicedetail"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </nuxt-link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="/servicedetail"
                    >Our Services</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/servicespeciality"
                    >Speciality</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item pe-3">
              <nuxt-link
                to="/aboutus"
                class="nav-link text-dark"
                aria-current="page"
              >
                About Us
              </nuxt-link>
            </li>
            <li class="nav-item pe-3">
              <nuxt-link
                to="/infrastructure"
                class="nav-link text-dark"
                aria-current="page"
              >
                Infrastructure
              </nuxt-link>
            </li>
            <li class="nav-item pe-3">
              <nuxt-link class="nav-link text-dark" to="/ourdentist"
                >Our Dentists</nuxt-link
              >
            </li>
            <li>
              <button
                type="button"
                class="btn bg-primary rounded-pill btn-small"
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
    return {};
  },
  methods: {},
};
</script>

<style>
#navbarSupportedContent a.nuxt-link-active {
  font-weight: bold;
  color: var(--dashed-img) !important;
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
