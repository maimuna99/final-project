<script setup>
import { ref, onErrorCaptured, nextTick } from "vue";
import AsyncContent from "../components/AsyncContent.vue";
import Placeholder from "../components/Placeholder.vue";

const error = ref("");
const renderComponent = ref(true);
const suspenseKey = ref(0);

const reload = () => {
  error.value = "";
  // updating this value will force a re render
  suspenseKey.value += 1;
};
onErrorCaptured((e) => {
  console.log("error", e);
  error.value = e;
  return true;
});
</script>
<template>
  <div class="container">
    <button @click="reload">Reload page</button>
    <!-- complex scenario, multiple components -->
    <div class="async-component errored" v-if="error">
      <!-- fallback error component -->
      Uh oh .. {{ error }}
    </div>
    <Suspense v-else :key="suspenseKey">
      <AsyncContent :time="1000">
        <AsyncContent :time="2000" />
        <AsyncContent :time="300">
          <AsyncContent :time="500" />
          <!-- non blocking load -->
          <Suspense>
            <AsyncContent :time="5000" />
            <template #fallback>
              <Placeholder />
            </template>
          </Suspense>
        </AsyncContent>
      </AsyncContent>
      <template #fallback>
        <!-- Same structure as main content -->
        <Placeholder>
          <Placeholder />
          <Placeholder>
            <Placeholder />
            <Placeholder />
          </Placeholder>
        </Placeholder>
      </template>
    </Suspense>
  </div>
</template>
