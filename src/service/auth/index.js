import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useAuth() {
    const router = useRouter()
    const errors = ref([])

    const register = async (data) => {
        await axios.post('http://localhost:8000/api/register', data)
        .then(response => {
            if (response.data.data.status) {
                localStorage.setItem('token', response.data.data.token)
                // store.state.user.token = response.data.data.token
                router.push({name: 'home'})
            } else {
                errors.value = response.data.message
            }
        })
        .catch(e => {
            console.log(e)
        })
    }

    const login = async (data) => {
        await axios.post('http://localhost:8000/api/login', data)
        .then(response => {
            if(response.data.data.status) {
                localStorage.setItem('token', response.data.data.token)
                // store.state.user.token = response.data.data.token
            router.push({name: 'home'})
            } else {
                errors.value = response.data.message
            }
        })
        .catch(e => {
            console.log(e)
        })
    }

    return {
        register,
        login,
        errors
    }
}