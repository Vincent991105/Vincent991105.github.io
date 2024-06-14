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
                        skill_mob_link:'https://chatgpt.com/c/e63098b6-aef1-4fb1-b967-c95865c9b2a6',
                        skill_desc:['。介面設計軟體','。多人協作設計','。Prototype功能','。自動對齊工具'],
                        skill_result:'A級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:5,
                            },
                            {
                                ability_name:"Auto-layout：",
                                ability_score:4,
                            },
                            {
                                ability_name:"Prototype：",
                                ability_score:4,
                            },
                            {
                                ability_name:"Component：",
                                ability_score:4,
                            }
                        ],
                        skill_img:["img/profile.jpg","img/profile.jpg","img/profile.jpg","img/profile.jpg"]
                    },
                    {
                        skill_name:'AI',
                        skill_icon:'img/adobe-illustrator_svgrepo.com.svg',
                        skill_mob_link:'https://chatgpt.com/c/e63098b6-aef1-4fb1-b967-c95865c9b2a6',
                        skill_desc:['。精細矢量設計','。無限放大不失真','。強大圖層管理','。豐富插件支援'],
                        skill_result:'B級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:4,
                            },
                            {
                                ability_name:"工具應用：",
                                ability_score:4,
                            },
                            {
                                ability_name:"圖層組織：",
                                ability_score:4,
                            },
                            {
                                ability_name:"效果實作：",
                                ability_score:3,
                            }
                        ],
                        skill_img:["img/profile.jpg","img/profile.jpg"]
                    },
                    {
                        skill_name:'PS',
                        skill_icon:'img/adobe-photoshop_svgrepo.com.svg',
                        skill_mob_link:'https://chatgpt.com/c/e63098b6-aef1-4fb1-b967-c95865c9b2a6',
                        skill_desc:['。強大圖像編輯','。多層次編輯支持','。高度精確控制','。廣泛格式支持'],
                        skill_result:'C級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:4,
                            },
                            {
                                ability_name:"圖層管理：",
                                ability_score:4,
                            },
                            {
                                ability_name:"選取技術：",
                                ability_score:3,
                            },
                            {
                                ability_name:"修圖技巧：",
                                ability_score:3,
                            }
                        ],
                        skill_img:["img/profile.jpg","img/profile.jpg"]
                    },
                    {
                        skill_name:'DW',
                        skill_icon:'img/adobe-dreamweaver_svgrepo.com.svg',
                        skill_mob_link:'https://chatgpt.com/c/e63098b6-aef1-4fb1-b967-c95865c9b2a6',
                        skill_desc:['。視覺化設計工具','。即時預覽功能','。多語言支持','。FTP 集成方便'],
                        skill_result:'C級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:4,
                            },
                            {
                                ability_name:"排版工具：",
                                ability_score:4,
                            },
                            {
                                ability_name:"程式輔助：",
                                ability_score:3,
                            },
                        ],
                        skill_img:["img/profile.jpg","img/profile.jpg"]
                    },
                    
                ],
                program:[
                    {
                        skill_name:'HTML',
                        skill_icon:'img/html-5_svgrepo.com.svg',
                        skill_mob_link:'https://chatgpt.com/c/e63098b6-aef1-4fb1-b967-c95865c9b2a6',
                        skill_desc:['。介面程式語言','。支援多語言配合','。多媒體支持'],
                        skill_result:'B級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:5,
                            },
                            {
                                ability_name:"結構編排：",
                                ability_score:4,
                            },
                            {
                                ability_name:"表單工具：",
                                ability_score:3,
                            },
                        ],
                        skill_img:['img/104_img.png'],
                    },
                    {
                        skill_name:'CSS',
                        skill_icon:'img/css-3_svgrepo.com.svg',
                        skill_mob_link:'https://chatgpt.com/c/e63098b6-aef1-4fb1-b967-c95865c9b2a6',
                        skill_desc:['。樣式和佈局控制','。響應式設計','。選擇器和層疊性','。動畫和過渡效果'],
                        skill_result:'B級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:5,
                            },
                            {
                                ability_name:"介面排版：",
                                ability_score:4,
                            },
                            {
                                ability_name:"SCSS應用：",
                                ability_score:3,
                            },
                            {
                                ability_name:"動畫過渡：",
                                ability_score:3,
                            }
                        ],
                        skill_img:["img/profile.jpg","img/profile.jpg"]
                    },
                    {
                        skill_name:'JavaSricpt',
                        skill_icon:'img/javascript_svgrepo.com.svg',
                        skill_mob_link:'https://chatgpt.com/c/e63098b6-aef1-4fb1-b967-c95865c9b2a6',
                        skill_desc:['。網頁腳本語言','。添加頁面交互性','。製作動態效果'],
                        skill_result:'C級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:4,
                            },
                            {
                                ability_name:"動態交互：",
                                ability_score:4,
                            },
                            {
                                ability_name:"DOM操作：",
                                ability_score:2,
                            },
                            {
                                ability_name:"事件處理：",
                                ability_score:3,
                            }
                        ],
                        skill_img:["img/profile.jpg","img/profile.jpg"]
                    },
                    {
                        skill_name:'Vue.js',
                        skill_icon:'img/vue_svgrepo.com.svg',
                        skill_mob_link:'https://chatgpt.com/c/e63098b6-aef1-4fb1-b967-c95865c9b2a6',
                        skill_desc:['。漸進式程式框架','。構建用戶界面','。數據驅動的視圖','。響應式數據綁定'],
                        skill_result:'B級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:4,
                            },
                            {
                                ability_name:"數據綁定：",
                                ability_score:4,
                            },
                            {
                                ability_name:"組件系統：",
                                ability_score:4,
                            },
                            {
                                ability_name:"指令系統：",
                                ability_score:4,
                            }
                        ],
                        skill_img:["img/demo_img.jpg","img/profile.jpg","img/profile.jpg"]
                    }
                ],
                another:[
                    {
                        skill_name:'Flutter',
                        skill_icon:'img/flutter_svgrepo.com.svg',
                        skill_mob_link:'https://chatgpt.com/c/e63098b6-aef1-4fb1-b967-c95865c9b2a6',
                        skill_desc:['。APP開發工具','。快速的开发周期','。热重载','。高效的异步编程模型'],
                        skill_result:'C級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:4,
                            },
                            {
                                ability_name:"Dart语言：",
                                ability_score:3,
                            },
                            {
                                ability_name:"框架應用：",
                                ability_score:3,
                            },
                            {
                                ability_name:"程序架构：",
                                ability_score:3,
                            }
                        ],
                        skill_img:["img/profile.jpg","img/profile.jpg","img/profile.jpg","img/profile.jpg"]
                    },
                    {
                        skill_name:'Unity',
                        skill_icon:'img/unity_svgrepo.com.svg',
                        skill_mob_link:'https://chatgpt.com/c/e63098b6-aef1-4fb1-b967-c95865c9b2a6',
                        skill_desc:['。遊戲軟體開發工具','。實際預覽遊戲介面','。簡易操作流程','。提供多元掛件'],
                        skill_result:'B級',
                        skill_type:[
                            {
                                ability_name:"基礎應用：",
                                ability_score:4,
                            },
                            {
                                ability_name:"動畫渲染：",
                                ability_score:3,
                            },
                            {
                                ability_name:"程式編碼：",
                                ability_score:4,
                            },
                            {
                                ability_name:"創意開發：",
                                ability_score:5,
                            }
                        ],
                        skill_img:["img/profile.jpg","img/profile.jpg"]
                    },
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
                    :class="{'skill_reset': true,'web': true,'skill_active':select_skill_id === skill.skill_name}" 
                    :key="skill.skill_name"
                >
                    <a class="item_vue_003_title web">
                        <img :src='skill.skill_icon' alt="skill.skill_name">
                        {{skill.skill_name}}
                    </a>
                    <ul v-if="select_skill_id === skill.skill_name" class="item_vue_003_skill_desc web">
                        <li v-for="desc in skill.skill_desc">{{desc}}</li>
                    </ul>
                </div>
                <a 
                v-for="skill in select_list[select_type_id]" 
                class="item_vue_003_title mob" 
                :href="skill.skill_mob_link">
                    <img :src='skill.skill_icon' alt="skill.skill_name">
                    {{skill.skill_name}}
                </a>
            </div>
            <div class="item_vue_003_intro" v-for="skill in select_list[select_type_id]" v-show="select_skill_id === skill.skill_name">
                <div class="main_color item_vue_003_exp">
                    技能熟練程度：
                    <span class="item_vue_003_result"  >{{skill.skill_result}}</span>
                </div>
                <ul class="item_vue_003_result_score">
                    <li v-for="ability in skill.skill_type" class="main_color">{{ability.ability_name}}
                        <span
                        v-for="i in ability.ability_score"class="item_vue_003_skill_point"></span>
                    </li>
                </ul>
                <div class="item_vue_003_image" v-show="skill.skill_img != ''">
                    <img v-for="image in skill.skill_img" :src='image' alt="skill.skill_name">
                </div>
            </div>
        </div>
    </div>
    `,
});

vue_003.mount('#content_3');