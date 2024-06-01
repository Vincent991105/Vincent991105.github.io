const call_vue = Vue.createApp({});

call_vue.component('call',{
    template:`
        <div :id="item.vue_id" :key="item.call_vue_name" v-for="item in calling" style="width:100%;">
            <component :is="item.call_vue_name"></component>
        </div>
    `,

    methods: {
        loadScripts() {
            this.calling.forEach(item => {
                const script = document.createElement('script');
                script.src = item.script_name;
                script.async = true;  // Optional: Load asynchronously
                document.head.appendChild(script);
            });
        },
        loadCSS() {
            this.calling.forEach(item => {
                const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = item.css_name;
                    document.head.appendChild(link);
            });
        }
    },
    mounted() {
        this.loadScripts();
        this.loadCSS();
    },

    data(){
        return{
            test:'yyxx',
            calling:[
                {
                    vue_id:'content_1',
                    call_vue_name:'item_vue_001',
                    script_name:'item_vue_001.js',
                    css_name:'item_vue_001.css'
                },
                {
                    vue_id:'content_2',
                    call_vue_name:'item_vue_002',
                    script_name:'item_vue_002.js',
                    css_name:'item_vue_002.css'
                }
            ]
        }
    }
})

call_vue.mount('#content');