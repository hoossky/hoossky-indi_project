<template>
    <v-container grid-list-xl>
        <v-card-title>
            <a @click="toHome"><h1>A to Z Review</h1></a>
            <v-spacer></v-spacer>
            <v-text-field label="Search" single-line hide-details @keyup.enter="retrieve"></v-text-field>
        </v-card-title>
        <br>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">글 번호</th>
                    <th class="text-left">제 목</th>
                    <th class="text-left">별 점</th>
                    <th class="text-left">등록일</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item of reviews" :key="item.reviewId">
                    <td>{{item.reviewId}}</td>
                    <td><a @click="retrieveOne(item.reviewTitle)">{{item.reviewTitle}}</a></td>
                    <td>{{item.stars}}</td>
                    <td>{{item.reviewDate}}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>

        <div class="text-center">
            <div style="margin: 0 auto; width: 250px; height: 100px"></div>
            <span @click="transferPage(pager.preBlock)" v-if="pager.existPrev" style="width: 50px; height: 50px; border: 1px solid #000000; margin: 5px">이 전</span>
            <span @click="transferPage(i-1)" v-for="i of pages" :key="i" style="width: 50px; height: 50px; border: 1px solid black; margin: 5px">
                 {{i}}
             </span>
            <span @click="transferPage(pager.nextBlock)" v-if="pager.existNext" style="width: 50px; height: 50px; border: 1px solid black; margin: 5px">다 음</span>
        </div>
        <br>
        <footer>
            <br>
            <p>Copyright A to Z Review 2020</p>
        </footer>
    </v-container>
</template>

<script>
    import {proxy} from "./mixins/proxy"
    import {mapState} from 'vuex'
    export default {
        mixins : [proxy],
        computed : {
            ...mapState({
                reviews : state => state.review.reviews,
                list : state => state.review.list,
                pages : state => state.review.pages,
                pager: state => state.review.pager
            })
        },
        created() {
            let json = proxy.methods.paging('http://localhost:5000/reviews/')
            this.$store.state.review.pages = json.pages
            this.$store.state.review.pager = json.temp
        },
        methods: {
            retrieve(){
                let searchWord = document.getElementById('searchWord').value
                if(searchWord === '') searchWord = 'null'
                this.$store.dispatch('review/transferPage', {category : 'reviews',
                    searchWord : 'null',
                    pageNumber : 0})
            },
            transferPage(d){
                this.$store.dispatch('review/transferPage',{category : 'reviews',
                    searchWord : 'null',
                    pageNumber : d})
            },
            toHome(){
                this.$router.push('/')
            },
            retrieveOne(reviewTitle){
                this.$store.dispatch('review/retrieveOne',{category:'reviews' ,
                    searchWord:reviewTitle})
            },
        }
    }
</script>
<style scoped>
    footer {
        padding: 10px;
        text-align: center;
        font-size: 20px;
        color: #34495e;
    }
</style>