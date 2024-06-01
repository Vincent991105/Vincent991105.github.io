const mob_menu = Vue.createApp({
    data() {
        return {
            menu_list:[
                {
                    menu_type:true,
                    menu_name:'關於我',
                    menu_url:'index.html',
                    menu_icon:'img/person_svgrepo.com.png'
                },
                {
                    menu_type:true,
                    menu_name:'作品',
                    menu_url:'canon_list.html',
                    menu_icon:'img/work-agenda_svgrepo.com.png'
                },
                {
                    menu_type:false,
                    menu_name:'聯絡方式',
                    menu_url:'canon_list.html',
                    menu_icon:'img/contact-book_svgrepo.com.png'
                }
            ]
        };
    }
});

mob_menu.mount('#bottom_menu');