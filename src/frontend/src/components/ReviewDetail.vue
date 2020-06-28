<template>
    <div>
        <div>
            <div class="top">
                <a @click="toHome"><h1>A to Z Review</h1></a>

            </div>
            <div style="height: 100px;">
            </div>
            <v-simple-table style="border : 1px solid black">
                <template v-slot:default>
                    <thead v-for="item of reviews" :key="item.reviewId">
                    <tr>
                        <th class="text-left">글 번호</th>
                        <th>{{item.reviewId}}</th>
                    </tr>
                    <tr>
                        <th class="text-left">제 목</th>
                        <td>{{item.reviewTitle}}</td>
                    </tr>
                    <tr>
                        <th class="text-left">별 점</th>
                        <td >{{item.stars}}</td>
                    </tr>
                    <tr>
                        <th class="text-left">등록일</th>
                        <td > {{item.reviewDate}}</td>
                    </tr>
                    </thead>
                </template>
            </v-simple-table>
        </div>
        <footer>
            <br>
            <p>Copyright A to Z Review 2020</p>
        </footer>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        computed: {
            ...mapState({
                reviews : state => state.review.reviews,
                item: state => state.review.item
            })
        },
        methods:{
            toHome(){
                this.$router.push('/')
            }
        }
    }
</script>
<style scoped>
    .table{border : 1px solid black}
    .table tr{border : 1px solid black}
    .table tr td{border : 1px solid black}
    #search{border : 1px solid black}
    footer {
        padding: 10px;
        text-align: center;
        font-size: 20px;
        color: #34495e;
    }
</style>