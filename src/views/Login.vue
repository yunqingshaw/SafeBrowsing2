<template>
    <div id='login'>
        <input type='email' v-model='email' placeholder='email'><br>
        <input type='o' v-model='password'placeholder='password'><br>
        <button @click='login()'>Log In</button><br>
        <p>Do not have an account? <router-link to='/signup'>Sign up</router-link> now!</p>
    </div>
</template>

<script>
import firebase from 'firebase';

export default{
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                function(user) {
                    alert('Account was logged in successfully.')
                },
                function(err) {
                    alert(err.message)
                }
            );
        }
    }
}
</script>

<style scoped>
#login {
    width: 300px;
    border: 1px solid #ccc;
    padding-top: 10px;
    margin: auto;
    margin-top: 20px;
}
input {
    margin: 2px;
    padding: 0;

}
button {
    margin-top: 10px;
}
p {
    margin-top: 10px;
    font-size: 12px;
}
</style>