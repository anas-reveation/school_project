<template>
  <div>
    <div class="p-3 mt-4 mb-2" style="background-color: var(--bg-element)">
      <p>
        {{ descriptionBody }}
      </p>
      <p class="secondary fw-semibold">
        <span class="primary">{{ reviewName }}</span> ({{ diagnoseName }})
      </p>
    </div>
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
