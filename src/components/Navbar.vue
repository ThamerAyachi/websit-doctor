<template>
  <div class="navbar hidden md:block">
      <!-- desktop navbar -->
      <div class="w-full bg-primary py-3 text-white px-5 flex justify-between">
          <!-- Logo -->
          <img src="/img/logos/Doctor_logo_2.png" alt="Doctor_logo_2" class="w-24">

          <!-- contact btn -->
          <button class="flex justify-self-center mt-1 space-x-2 ">
              <span v-html="icons.contact"></span>
              <span>Contact</span>
          </button>
      </div>
  </div>
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return{
            icons : {
                contact :`
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                `
            }
        }
    }

}
</script>

