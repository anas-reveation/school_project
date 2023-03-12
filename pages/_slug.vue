<template>
  <div>
    <h1>{{ carddata1.name }}</h1>
    <h1>{{ carddata1.title }}</h1>
    <h1>{{ carddata1.description }}</h1>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";

export default {
  props: {
    carddata: {
      type: Object,
      default: () => {},
    },
  },
  async asyncData({ params, $sanity }) {
    const query2 = groq`*[_type == "carddata" && slug.current=="${params.slug}"][0]{
      name,slug,title,meta,description
    }`;
    const carddata1 = await $sanity.fetch(query2);

    return { carddata1 };
  },
};
</script>
