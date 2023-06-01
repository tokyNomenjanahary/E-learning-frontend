<template>
    <nav-section></nav-section>
    <router-view></router-view>
    <!-- Footer -->
    <footer-section></footer-section>
    <!-- Footer End -->
    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</template>

<script setup>
    import NavSection from '../components/NavSection.vue';
    import FooterSection from '../components/FooterSection.vue';
</script>
