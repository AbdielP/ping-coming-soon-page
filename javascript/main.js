(() => {
    const app = {
        data() {
            return {
                name: 'Abdiel P. Carrera'
            }
        }
    }
    
    var mountedApp = Vue.createApp(app).mount('#app');
})();