import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: [],
    blogsIdToShow: [],
    blogCategories: [],
    categories: [],
    userStrategies: [],
    token: ''
  },
  mutations: {
    setBlogs(state, blogsToAdd) {
      state.blogs = blogsToAdd
    },
    setBlogsToShow(state, blogsToShow) {
      state.blogsIdToShow = []
      blogsToShow.forEach(el => state.blogsIdToShow.push(el.id))
     
 
    },
    addBlogs(state,blogs){
      blogs.forEach(element => {
        state.blogs.push(element)
      });
    },
    addStrategy(state,obj){
      state.userStrategies.push(obj)
    },
    addBlog(state, item) {
      state.blogs.push(item);
    },
    setCategories(state,catToSet){
      state.categories = catToSet
    },
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
    setStrategies(state,newStrategies){
      state.userStrategies = newStrategies
    },
    addComment(state, obj) {
      
      state.blogs.forEach(el=>{
        if(el.id == obj.blogId){
          el.comments.push(obj.comment[0])
        }

      })
     
    }
  },
  actions: {
    fetchBlogs({ commit }) {
      fetch('https://gagrica-rest.herokuapp.com/admin/allBlogs')
        .then( obj => obj.json() )
        .then( res =>{
          commit('setBlogs', res) ;
        })
      
    },
    async fetchByCategory({ commit, state }, depName) {

      const blogsToSend = []
      
      state.blogs.forEach( blog => {
     
       
        if(blog.category == depName )
          blogsToSend.push(blog)
      });
     

      if (blogsToSend.length > 0) {
        console.log("/////")
        commit('setBlogsToShow', blogsToSend);
      } else {
        const obj = await fetch(`https://gagrica-rest.herokuapp.com/admin/blog/${depName}`);
        const res = await obj.json();

        commit('addBlogs', res);
        commit('setBlogsToShow', res);
      }
    },
    fetchCategories({ commit }){
      fetch('https://gagrica-rest.herokuapp.com/admin/categories')
      .then( obj => obj.json() )
        .then( res => commit('setCategories', res) );
  
    },
    getBlog({ commit, state }, id) {
      return new Promise( (resolve) => {
        const got = state.blogs.filter( blog => blog.id == id )[0];
       
        if (got) {
          console.log('sending')
          resolve(got);
        } else {
          fetch(`https://gagrica-rest.herokuapp.com/admin/blogs/${id}`)
            .then( obj => obj.json())
            .then( res => {
              commit('addBlog', res);
              console.log('adding')
              resolve(res);
            });
        }
      });
    },
    register({ commit }, obj) {
      fetch('https://gagrica-auth.herokuapp.com/admin/api_register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => commit('setToken', tkn.token) );
    },

    login({ commit }, obj) {
      fetch('https://gagrica-auth.herokuapp.com/admin/api_login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)
        }
      });
    },
    socket_comment({ commit }, msg) {
      const comment = JSON.parse(msg);
      commit('addComment', { blogId: comment[0].blogId, comment: comment });
    },
  fetchStrategies({commit} ){
    fetch(`https://gagrica-rest.herokuapp.com/admin/userStrategies/me`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${localStorage.token}` }
    }).then( res => res.json() )
    .then(obj =>  commit('setStrategies', obj) )
     


  },
  createStrategy({commit}, obj){
    fetch('https://gagrica-rest.herokuapp.com/admin/userStrategies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}` },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then(  commit('addStrategy', obj))
        
      
  }

  },
  modules: {
  }
})
