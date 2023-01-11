<template>
  <div class="container">
    <h3 class="mb-4 fw-semibold" style="color: var(--service-title)">
      {{ tittle }}
    </h3>
    <div class="row">
      <div class="col-md-6">
        <div>
          <SanityImage
            style="width: 100%; height: 100%"
            :asset-id="before"
            alt="before-img"
          />
          <p class="text-center fw-semibold">Before</p>
        </div>
      </div>
      <div class="col-md-6">
        <div>
          <SanityImage
            style="width: 100%; height: 100%"
            :asset-id="after"
            alt="after-img"
          />
          <p class="text-center fw-semibold">After</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tittle: String,
    before: String,
    after: String,
  },
};
</script>
