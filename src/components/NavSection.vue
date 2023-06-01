<template>
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <router-link
          :to="{ name: 'home' }"
          class="navbar-brand d-flex align-items-center px-4 px-lg-5"
          >
          <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>eLEARNING</h2>
      </router-link>
      <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
              <router-link
                  :to="{ name: 'home' }"
                  class="nav-item nav-link active"
                  >
                  Home
              </router-link>
              <router-link
                  :to="{ name: 'about' }"
                  class="nav-item nav-link"
                  >
                  About
              </router-link>
              <router-link
                  :to="{ name: 'courses' }"
                  class="nav-item nav-link"
                  >
                  Courses
              </router-link>
              <router-link
                  :to="{ name: 'contact' }"
                  class="nav-item nav-link"
                  >
                  Contact
              </router-link>
              <div class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" >Connexion</a>
                  <div class="dropdown-menu fade-down m-0">
                    <router-link
                        :to="{ name: 'signin'}"
                        class="dropdown-item"
                    >
                    SignIn
                    </router-link>
                    <router-link
                        :to="{ name: 'signup'}"
                        class="dropdown-item"
                    >
                    SignUp
                    </router-link>
                      <!-- <a href="team.html" ></a>
                      <a href="testimonial.html" class="dropdown-item"></a> -->
                      <!-- <a href="404.html" class="dropdown-item">404 Page</a> -->
                  </div>
              </div>
          </div>

          <button class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Log Out<i class="fa fa-arrow-right ms-3"></i></button>
      </div>
    </nav>
  <!-- Navbar End -->
</template>