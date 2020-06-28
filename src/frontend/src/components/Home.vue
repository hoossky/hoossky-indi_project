<template>
    <div>
        <header>
            <div class="container">
                <div class="topright">
                    <div class="button-1">
                        <div class="eff-2"></div>
                        <a @click="register">회원 가입</a>
                    </div>
                    <div class="button-2">
                        <div class="eff-2"></div>
                        <a @click="login">로그인</a>
                    </div>
                </div>
            </div>
            <h2>A to Z Review</h2>
        </header>
        <section>
            <img width="700" height="500" src="https://image.freepik.com/free-vector/reviews-concept-landing-page_52683-12186.jpg" >
            <div style= "height:50px"></div>
            <h2>당신의 사용 후기를 남겨주세요!</h2>
            <div style= "height:50px"></div>
            <div class="text-center" style="margin: auto">
                <!--<v-text-field style="width:500px; margin:auto" label="리뷰보기" single-linehide-details @keyup.enter="review" v-model= "searchWord">
                </v-text-field>-->
                <v-btn @click="review" rounded color="primary">리뷰 보기</v-btn>
            </div>
        </section>
        <footer>
            <br>
            <p>Copyright A to Z Review 2020</p>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                searchWord: ''
            }
        },
        methods: {
            register(){
                this.$router.push('/register')
            },
            login(){
                this.$router.push('/login')
            },
            review(){
                this.$store.dispatch('review/search', this.searchWord);
            }
        }
    }
</script>
<style scoped>
    .container{
        position: absolute;
        left: 300px;
        top: 50px;
    }
    .button-1{
        width:140px;
        height:50px;
        border:2px solid #34495e;
        float:left;
        text-align:center;
        cursor:pointer;
        position:relative;
        box-sizing:border-box;
        overflow:hidden;
        margin:0 0 30px 0;
    }
    .button-1 a{
        font-family:arial;
        font-size:16px;
        color:#34495e;
        text-decoration:none;
        line-height:50px;
        transition:all .5s ease;
        z-index:2;
        position:relative;
    }
    .button-1:hover .eff-2{
        top:0;
    }
    .button-1:hover a{
        color:#fff;
    }
    .button-2{
        width:140px;
        height:50px;
        border:2px solid #34495e;
        float:left;
        text-align:center;
        cursor:pointer;
        position:relative;
        box-sizing:border-box;
        overflow:hidden;
        margin:0 0 40px 30px;
    }
    .button-2 a{
        font-family:arial;
        font-size:16px;
        color:#34495e;
        text-decoration:none;
        line-height:50px;
        transition:all .5s ease;
        z-index:2;
        position:relative;
    }
    .eff-2{
        width:140px;
        height:50px;
        top:-50px;
        background:#34495e;
        position:absolute;
        transition:all .5s ease;
        z-index:1;
    }
    .button-2:hover .eff-2{
        top:0;
    }
    .button-2:hover a{
        color:#fff;
    }
    body {
        background-color: #f1d5cf;
        font-family: Sans-Serif;
        text-align: center;
        color: #34495e;
    }
    header {
        background-color: #f1d5cf;
        padding: 30px;
        text-align: center;
        font-size: 35px;
        color: #34495e;
    }
    .container {
        position: relative;
    }
    .topright {
        position: absolute;
        top: 8px;
        right: 300px;
        font-size: 18px;
    }
    section {
        background-color: #f1d5cf;
        padding: 10px;
        text-align: center;
        font-size: 25px;
        color: #34495e;
    }
    section2 {
        background-color: white;
        padding: 10px;
        text-align: center;
        font-size: 25px;
        color: #34495e;
    }
    section3 {
        background-color: #f1d5cf;
        padding: 10px;
        text-align: center;
        font-size: 25px;
        color: #34495e;
    }
    section4 {
        background-color: white;
        padding: 10px;
        text-align: center;
        font-size: 25px;
        color: #34495e;
    }
    nav {
        float: left;
        width: 100%;
        height: 100px;
        background: #f1d5cf;
        padding: 20px;
        text-align: center;
        color: #34495e;
    }
    nav ul {
        list-style-type: none;
        padding: 0;
    }
    article {
        float: left;
        padding: 20px;
        width: 70%;
        background-color: #f1d5cf;
        height: 300px;
    }
    section:after {
        content: "";
        display: table;
        clear: both;
    }
    footer {
        background-color: #f1d5cf;
        padding: 10px;
        text-align: center;
        font-size: 20px;
        color: white;
    }
</style>