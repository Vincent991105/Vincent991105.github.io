const vue_003 = Vue.createApp({});

vue_003.component('item_vue_003', {
    data(){
        return{
            select_type_id:'design',
            select_skill_id:'',
            select_menu:[
                {
                    id:'design',
                    menu_name:'設計技能',
                    menu_icon:'design_Icon',
                    is_active:false,
                },
                {
                    id:'program',
                    menu_name:'程式技能',
                    menu_icon:'program_Icon',
                    is_active:false,
                },
                {
                    id:'another',
                    menu_name:'其他技能',
                    menu_icon:'another_Icon',
                    is_active:false,
                }

            ],
            select_list:{
                design:[
                    {
                        skill_name:'Figma',
                        skill_icon:'img/figma-file_svgrepo.com.svg',
                        skill_desc:['。介面設計軟體','。多人協作設計','。Prototype功能','。自動對齊工具'],
                        skill_result:'A級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:3,
                            },
                            {
                                ability_name:"Auto-layout：",
                                ability_score:4,
                            },
                            {
                                ability_name:"Prototype：",
                                ability_score:2,
                            },
                            {
                                ability_name:"Component：",
                                ability_score:1,
                            }
                        ],
                        skill_img:["img/profile.jpg","img/profile.jpg","img/profile.jpg","img/profile.jpg"]
                    },
                    {
                        skill_name:'456',
                        skill_icon:'img/figma-file_svgrepo.com.svg',
                        skill_desc:['。介面設計軟體','。多人協作設計','。Prototype功能','。自動對齊工具'],
                        skill_result:'A級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:5,
                            },
                            {
                                ability_name:"Auto-layout：",
                                ability_score:5,
                            },
                            {
                                ability_name:"Prototype：",
                                ability_score:5,
                            },
                            {
                                ability_name:"Component：",
                                ability_score:5,
                            }
                        ],
                        skill_img:["img/profile.jpg","img/profile.jpg"]
                    }
                ],
            }
        };
    },
    methods:{
        switch_list(id){
            this.select_type_id = id;
            this.select_skill_id = id[1].skill_name;
        },
        switch_skill(skill_id){
            this.select_skill_id = skill_id;
        }
    },

    template: 
    `<div class="item_vue_003">
        <div class="item_vue_003_catagory">
            <button 
            v-for="item in select_menu"
            @click="switch_list(item.id)"
            type="button" :class="{'item_002_catagory_button': true, 'active': select_type_id === item.id}" :key="item.id">
            <div :class='item.menu_icon'></div>
            {{ item.menu_name }}
            </button>
        </div>
        <div class="item_vue_003_list call">
            <div class="item_vue_003_skill">
                <div 
                    @click="switch_skill(skill.skill_name)" 
                    v-for="skill in select_list[select_type_id]" 
                    :class="{'skill_reset': true,'skill_active':select_skill_id === skill.skill_name}" 
                    :key="skill.skill_name"
                >
                    <div class="item_vue_003_title">
                        <img :src='skill.skill_icon' alt="skill.skill_name">
                        {{skill.skill_name}}
                    </div>
                    <ul v-if="select_skill_id === skill.skill_name" class="item_vue_003_skill_desc">
                        <li v-for="desc in skill.skill_desc">{{desc}}</li>
                    </ul>
                </div>
            </div>
            <div v-for="skill in select_list[select_type_id]" v-show="select_skill_id === skill.skill_name">
                <div class="main_color item_vue_003_exp">
                    技能熟練程度：
                    <span class="item_vue_003_result"  >{{skill.skill_result}}</span>
                </div>
                <ul class="item_vue_003_result_score">
                    <li v-for="ability in skill.skill_type" class="main_color">{{ability.ability_name}}
                        <span v-for="i in ability.ability_score"class="item_vue_003_skill_point"></span>
                    </li>
                </ul>
                <div class="item_vue_003_image">
                    <img v-for="image in skill.skill_img" :src='image' alt="skill.skill_name">
                </div>
            </div>
        </div>
    </div>
    `,
});

vue_003.mount('#content_3');