<template>
    <v-container>
        <v-card>
    <div>
        <h2>Login</h2>
            <div class="form">
                <v-text-field v-model="data.email" label="Email"></v-text-field>
                <v-text-field v-model="data.password" label="Password" :type="'password'"></v-text-field>
                <v-btn @click="login()" block color="red">Login</v-btn>
            </div>
    </div>
        </v-card>
    </v-container>
</template>


<script>

export default {
    data () {
        return {
            data: {
                email: null,
                password: null,
            },
            user: new UserData,
        }
    },
    methods: {
        login(){
            var url = this.$apiUrl + '/authjwt'
            this.user = new UserData()
            this.user.append('email',this.form.email);
            this.user.append('password',this.form.password);
            this.$http.post(url,this.user).then(response =>{
                if(response.data.token){
                    localStorage.setItem("token" , response.data.token)
                    this.$router.push({ name : "UserController"})
                }
                else{
                    alert("login gagal");
                }
            })
        }
    }
};
</script>
