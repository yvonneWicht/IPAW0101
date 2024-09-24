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
        <img src="@/assets/clothes.jpg" alt="Kleider"/>
      <NuxtPage/>


    </NuxtLayout>

  </div>
</template>
<script setup lang="ts">
</script>

<!--Minute 32 - Layouts-->
<!--https://youtu.be/fTPCKnZZ2dk-->
<!--Infos zu SVG: Minute 46-->
<!--Als Component/Icons einbauen, ist dann eine vue-Datei in der der SVG-Code liegt-->
<!--VueUse!!!!!!-->
<!--Middleware genauer anschauen ob nützlich ca. 1std 4-->
<!--content module um texte nicht im html schreiben zu müssen?-->