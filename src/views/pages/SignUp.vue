<template>
    <!-- Team Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s"
                    style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                    <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 class="mb-4">Welcome to eLEARNING</h1>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                        eos. Clita erat ipsum et lorem et sit.</p>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                        eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div class="row gy-2 gx-4 mb-4">
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <span>I have an account</span>
                    </div>
                    <div>
                        <router-link :to="{ name: 'signin' }" class="btn btn-success py-3 px-5 mt-2 w-100">
                            SignIn
                        </router-link>
                        <!-- <a class="btn btn-success py-3 px-5 mt-2 w-100" href="signin.html">SignIn</a> -->
                    </div>

                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s"
                    style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                    <div class="position-relative h-100">
                        <div class="wow fadeInUp" data-wow-delay="0.5s"
                            style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="firstName" placeholder="First Name" v-model="data.firstName">
                                            <label for="firstName">First Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Name" v-model="data.name">
                                            <label for="name">Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email"
                                                placeholder="Your Email Adress" v-model="data.email">
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="form-check d-flex mx-2">
                                        <div class="col-6">
                                            <input class="form-check-input" type="radio" name="user_role"
                                                id="student" value="0" v-model="data.isTeacher">
                                            <label class="form-check-label" for="student">
                                                Student
                                            </label>
                                        </div>
                                        <div class="col-6">
                                            <input class="form-check-input" type="radio" name="user_role"
                                                id="teacher" value="1" v-model="data.isTeacher">
                                            <label class="form-check-label" for="teacher">
                                                Teacher
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="password"
                                                placeholder="Your Password" v-model="data.password">
                                            <label for="password">Password</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="passwordConfirmation"
                                                placeholder="Confirm Password" v-model="data.confirmPassword">
                                            <label for="passwordConfirmation">Confirm Password</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="phone" placeholder="Phone Number"
                                                v-model="data.phone">
                                            <label for="phone">Phone Number</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" @click.prevent="handleRegister">SignUp</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Team End -->
</template>

<script setup>
import useAuth from "@/service/auth";
import { reactive } from "vue";

const data = reactive({
    firstName: '',
    name: '',
    email: '',
    isTeacher: 0,
    password: '',
    confirmPassword: '',
    phone: ''
})

const { register } = useAuth()

const handleRegister = async () => {
    await register({ ...data })
}
</script>

<style></style>