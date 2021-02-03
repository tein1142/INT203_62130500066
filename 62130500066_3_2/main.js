const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            firstname:'Pantavit',
            lastname:'Hengnalen',
            imageURL:'https://www.thairath.co.th/media/HCtHFA7ele6Q2dUNFWl3FcNz4RNw5xNneXhwHMrq7UTztYOpclwgiP2hGbfqBjI5m2.jpg',
            aticle:'Article',
            follower:'Followers',
            ratting:'Ratings',
            chat:'Chat',
            developer:'Font-end developer'
            
        }
    },
    
}
Vue.createApp(app).mount('#app')