<template>
    <div class="form-inline">
        <h3>Sign In</h3>

        <div class="form-group">
            <input
                    type="text"
                    placeholder="email"
                    class="form-control"
                    v-model="email"
            >
        </div>

        <div class="form-group">
            <input
                    type="password"
                    placeholder="password"
                    class="form-control"
                    v-model="password"
            >
        </div>

        <br>

        <button
                class="btn btn-primary"
                @click.prevent="signIn">Sign In</button>
        <br>

        <router-link to="/signup">Not a user ? Sign Up</router-link>

        <br>

        {{ error.message }}

    </div>
    
</template>

<script>
    import { firebaseApp } from "../firebase";

    export default {
        name: "SignIn",
        data(){
            return {
                email: '',
                password: '',
                error: {
                    message: ''
                }
            }
        },
        methods: {
            signIn(){
                firebaseApp.auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .catch(error => {
                        this.error = error;
                    })
            }
        }
    }
</script>
