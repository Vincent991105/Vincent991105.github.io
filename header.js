const header = Vue.createApp({});

header.component('header_item', {
    data(){
        return{
            menu_list:[
                {
                    menu_name:'關於我',
                    menu_url:'index.html'
                },
                {
                    menu_name:'作品',
                    menu_url:'canon_list.html'
                },
                {
                    menu_name:'一頁式履歷',
                    menu_url:''
                }
            ]
        }
    },

    template: `
    <div class="menu_bar">
        <a href="index.html" class="logo">
            <img src="img/img.png" alt="logo">
            <div class="title">
                <h4 class="main_color">作品集</h4>
                <h4 class="main_color">Portfolio</h4>
                <p>made by vincent</p>
            </div>
        </a>
        <ul class="menu">
            <li v-for="menu in menu_list" :key="menu.menu_name">
                <a :href="menu.menu_url" class="main_color">{{ menu.menu_name }}</a>
            </li>
        </ul>
    </div>
    <div class="switch_mob" style="display:none">
        <a id="web" href="/index.html?forceDevice=mobile">
            切換模式
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C12.6863 4 10 6.6863 10 10V38C10 41.3138 12.6863 44 16 44H32C35.3138 44 38 41.3138 38 38V10C38 6.6863 35.3138 4 32 4H16ZM14 10C14 8.89544 14.8954 8 16 8H32C33.1046 8 34 8.89544 34 10V38C34 39.1046 33.1046 40 32 40H16C14.8954 40 14 39.1046 14 38V10ZM20 34C18.8954 34 18 34.8954 18 36C18 37.1046 18.8954 38 20 38H28C29.1046 38 30 37.1046 30 36C30 34.8954 29.1046 34 28 34H20Z"/>
            </svg>
        </a>
        <a id="mob" href="/index.html?forceDevice=web">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18.6712 1.53143H1.32875C0.594492 1.53143 0 2.12655 0 2.86018V13.9527C0 14.6864 0.594492 15.2815 1.32875 15.2815H8.59375V15.5775C8.59375 16.3111 7.99926 16.9062 7.265 16.9062H5.3125V18.4687H8.17141H11.8286H14.6875V16.9062H12.735C12.0007 16.9062 11.4062 16.3112 11.4062 15.5775V15.2815H18.6712C19.4055 15.2815 20 14.6864 20 13.9527V2.86018C20 2.12655 19.4055 1.53143 18.6712 1.53143ZM18.125 12.3383C18.125 12.5831 17.9266 12.7814 17.6819 12.7814H2.31813C2.07336 12.7814 1.875 12.5831 1.875 12.3383V3.84956C1.875 3.60479 2.07336 3.40643 2.31813 3.40643H17.6819C17.9267 3.40643 18.125 3.60479 18.125 3.84956V12.3383H18.125Z" fill="white"/>
              </svg>
              切換
        </a>
    </div>`
})

header.mount('#header');