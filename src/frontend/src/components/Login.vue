<template>
    <v-app id="inspire">
        <header>
            <h2>A to Z Review</h2>
        </header>
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>로그인</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="userid"
                                            name="userid"
                                            prepend-icon="mdi-account"
                                            type="text"
                                    ></v-text-field>

                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="password"
                                            prepend-icon="mdi-lock"
                                            type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions style="margin-right: 195px">
                                <v-spacer></v-spacer>
                                <v-btn @click="signIn" color="primary">로그인</v-btn>
                                <v-btn @click="signUp" color="primary">회원 가입</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <footer>
            <br>
            <p>Copyright A to Z Review 2020</p>
        </footer>
    </v-app>

</template>

<script>
    export default {
        data(){
            return {
                userId: '',
                password: ''
            }
        },
        methods: {
            signIn(){
                /*firebase.auth().signInWithEmailAndPassword(this.userId, this.password
                ).then(
                    function () {
                        alert("가입 완료")
                    },
                    function (err) {
                        alert("에러 : " + err.message)
                    })*/
                this.$store.dispatch('review/search', this.searchWord);
            },
            signUp(){
                this.$router.push('/register')
            }
        }
    }
</script>

<style scoped>
    header {
        padding: 5px;
        text-align: center;
        font-size: 35px;
        color: #34495e;
    }
    footer {
        padding: 10px;
        text-align: center;
        font-size: 20px;
        color: #34495e;
    }
</style>