<template>
  <NuxtRouteAnnouncer/>
  <div>
    <!--    components einfügen-->
    <Header/>
    <NuxtLayout>
      <header>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/engagement">Engagement</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/engagement/fahrer-werden">Fahrer werden</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/unser-verein">Unser Verein</NuxtLink>
          </li>
        </ul>
      </header>

      <NuxtPage/>


    </NuxtLayout>

  </div>
</template>
<script setup lang="ts">
</script>

<!--Minute 32 - Layouts-->
<!--https://youtu.be/fTPCKnZZ2dk-->
