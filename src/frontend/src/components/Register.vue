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
                                <v-toolbar-title>회원가입</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field v-model="name"
                                            label="이름"
                                            name="이름"
                                            prepend-icon="mdi-account"
                                            type="text"
                                    ></v-text-field>

                                    <v-text-field v-model="userId"
                                                  label="아이디"
                                                  name="아이디"
                                                  prepend-icon="mdi-account"
                                                  type="text"
                                    ></v-text-field>

                                    <v-text-field v-model="password"
                                                  label="비밀번호"
                                                  name="비밀번호"
                                                  prepend-icon="mdi-lock"
                                                  type="password"
                                    ></v-text-field>

                                    <v-text-field v-model="ssn"
                                            label="주민등록번호"
                                            name="주민등록번호"
                                            prepend-icon="mdi-account"
                                            type="text"
                                    ></v-text-field>

                                    <v-text-field v-model="address"
                                            label="주소"
                                            name="주소"
                                            prepend-icon="mdi-home"
                                            type="text"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions style="margin-right: 195px">
                                <v-spacer></v-spacer>
                                <v-btn @click="signIn" color="primary">가입 하기</v-btn>
                                <v-btn @click="toHome" color="primary">홈으로 가기</v-btn>
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
                name: '',
                userId : '',
                password : '',
                ssn : '',
                address : ''
            }
        },
        methods: {
            signIn(){
                /*firebase.auth().createUserWithEmailAndPassword(this.userId, this.password,
                ).then(
                    function () {
                        alert("가입 완료")
                    },
                    function (err) {
                        alert("에러 : " + err.message)
                    }
                )*/
                this.$router.push('/login')
            },
            toHome(){
                this.$router.push('/')
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