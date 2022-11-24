<script setup>
	import { ref, onErrorCaptured } from 'vue'
	const response = ref({})

  // adding delay
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

  onErrorCaptured((err) => {
    // error processing
  })

  const res = await fetch('https://yesno.wtf/api')
  console.log(res)
  if (!res.ok) {
    throw new Error()
  }
  response.value = (await res.json())

</script>

<template>
  <div>
    <h2>{{ response.answer }}</h2>
    <img style="height: 250px;" :src="response.image" />
  </div>
</template>