<template>
    <div id='signup'>
        <table id='signup_table' width='30%'>
            <tr>
                <th>Email: </th>
                <td><input type='email' v-model='email'/></td>
            </tr>
            <tr>
                <th>Password: </th>
                <td><input type='password' v-model='password'/></td>
            </tr>
        </table>
    <button @click='signup()'>Submit</button>
    </div>
</template>

<script>
import firebase from "firebase"

 export default{
    name: 'signup',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        signup: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function (user){
                    alert('Account was created successfully.')
                },
                function (err){
                    alert(err.message)
                }
            );
        }
    }
}

</script>

<style scoped>
#signup {
    width: 300px;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin: auto;
    margin-top: 20px
}
button {
    margin-top: 5px;
}
</style>