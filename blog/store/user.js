export const state = () => ({
    loginStatus : false,
    adminStatus: false
})

export const mutations = {
    login(state,val){
        state.loginStatus = val;
    },
    setAdmin(state,val){
        state.adminStatus = val;
    }
}
