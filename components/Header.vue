<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light py-3">
      <div class="container psm-4">
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
              <nuxt-link to="/" class="nav-link active" aria-current="page"
                >Home</nuxt-link
              >
            </li>
            <li class="nav-item pe-3">
              <nuxt-link
                to="/servicedetail"
                class="nav-link text-dark"
                aria-current="page"
                >Services</nuxt-link
              >
            </li>
            <li class="nav-item pe-3">
              <a class="nav-link text-dark" aria-current="page" href="#"
                >About Us</a
              >
            </li>
            <li class="nav-item pe-3">
              <a class="nav-link text-dark" href="#">Our Dentists</a>
            </li>
            <li>
              <button
                type="button"
                class="btn bg-primary rounded-pill btn-small"
                style="font-weight: 600"
              >
                Contact us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
