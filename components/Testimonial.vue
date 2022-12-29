<template>
  <div class="">
    <p>
      {{ descriptionBody }}
    </p>
    <p class="secondary fw-semibold">
      <span class="primary">{{ reviewName }}</span> ({{ diagnoseName }})
    </p>
  </div>
</template>

<script>
export default {
  props: {
    reviewName: String,
    diagnoseName: String,
    descriptionBody: String,
  },
};
</script>
