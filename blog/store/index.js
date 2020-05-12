export const actions = {
    nuxtServerInit({ commit }, { req }) {
        var Cookies = {};
        req.headers.cookie && req.headers.cookie.split(';').forEach(function (Cookie) {
            var parts = Cookie.split('=');
            Cookies[parts[0].trim()] = (parts[1] || '').trim();
        });
        console.log(Cookies)
        if (Cookies.id) {
            console.log('id')
            commit('user/login', true);
            if (Cookies.admin) {
                console.log('admin')
                commit('user/setAdmin', true);
            }
        }
    }
}