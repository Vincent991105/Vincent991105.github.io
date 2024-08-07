const resume_vue_004 = Vue.createApp({});

resume_vue_004.component('resume_item_004', {
    template: 
    `<div class="num_title">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="389" height="321" viewBox="0 0 389 321" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M137.143 320.5H45.7143C33.5901 320.5 21.9625 315.684 13.3894 307.111C4.81632 298.538 0 286.91 0 274.786V46.2143C0 34.0901 4.81632 22.4625 13.3894 13.8894C21.9625 5.31632 33.5901 0.5 45.7143 0.5H137.143C149.267 0.5 160.895 5.31632 169.468 13.8894C178.041 22.4625 182.857 34.0901 182.857 46.2143V274.786C182.857 286.91 178.041 298.538 169.468 307.111C160.895 315.684 149.267 320.5 137.143 320.5ZM45.7143 46.2143V274.786H137.143V46.2143H45.7143ZM114.287 137.643H68.5727V183.357H114.287V137.643ZM205.714 0.5H342.857C354.981 0.5 366.609 5.31632 375.182 13.8894C383.755 22.4625 388.572 34.0901 388.572 46.2143V274.786C388.572 286.91 383.755 298.538 375.182 307.111C366.609 315.684 354.981 320.5 342.857 320.5H205.714V274.786H342.857V183.357H251.429V137.643H342.857V46.2143H205.714V0.5Z" fill="url(#pattern0_226_198)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M137.143 320.5H45.7143C33.5901 320.5 21.9625 315.684 13.3894 307.111C4.81632 298.538 0 286.91 0 274.786V46.2143C0 34.0901 4.81632 22.4625 13.3894 13.8894C21.9625 5.31632 33.5901 0.5 45.7143 0.5H137.143C149.267 0.5 160.895 5.31632 169.468 13.8894C178.041 22.4625 182.857 34.0901 182.857 46.2143V274.786C182.857 286.91 178.041 298.538 169.468 307.111C160.895 315.684 149.267 320.5 137.143 320.5ZM45.7143 46.2143V274.786H137.143V46.2143H45.7143ZM114.287 137.643H68.5727V183.357H114.287V137.643ZM205.714 0.5H342.857C354.981 0.5 366.609 5.31632 375.182 13.8894C383.755 22.4625 388.572 34.0901 388.572 46.2143V274.786C388.572 286.91 383.755 298.538 375.182 307.111C366.609 315.684 354.981 320.5 342.857 320.5H205.714V274.786H342.857V183.357H251.429V137.643H342.857V46.2143H205.714V0.5Z" fill="black" fill-opacity="0.2"/>
                <defs>
                    <pattern id="pattern0_226_198" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_226_198" transform="matrix(0.000301549 0 0 0.000366166 -0.117572 0)"/>
                    </pattern>
                    <image id="image0_226_198" width="4096" height="2731" xlink:href="img/job_03.jpg">
                </defs>
        </svg>
        <h2>職涯歷程</h2>
    </div>
    <div class="desc_scroll">
        <div class="desc" v-for="i in job_list">
            <div class="job_desc">
                <div class="job_title">
                    <h4>{{i.comp_name}}</h4>
                    <h3>{{i.job_name}}<span>{{i.date}}</span></h3>
                </div>
                <div class="detail_desc" v-html="i.job_desc">
                </div>
                <div class="supply" v-if="i.supply_img.length > 0">
                    <p>合作廠商：</p>
                    <div v-for="img in i.supply_img" :key="img"><img :src='img' :alt='img'></div>
                </div>
            </div>
            <div class="scroll_bar">
                <span></span>
                <p v-html="i.scroll"></p>
            </div>
        </div>
    </div>`,

    data(){
        return{
            job_list:[
                {
                    comp_name:'Tanashin【TPHM】',
                    job_name:'資材人員',
                    date:'【2018/02 ~ 2018/07】',
                    job_desc:`是一家日本電子零件開發工廠於馬來西亞開立的分公司，
                    <br>當時就業的單位隸屬於該Tanashin的子公司。
                    <p>&nbsp</p>
                    主要負責工廠所需初始零件(螺絲，引擎等)的採買，
                    <br>本人負責的範圍是於國外廠商進行對接的部份。`,
                    supply_img:['img/mabuchi.png','img/mabuchi.png'],
                    scroll:`Scroll<br>Down`,
                },
                {
                    comp_name:'Tanashin【TPHM】',
                    job_name:'資材人員',
                    date:'【2018/02 ~ 2018/07】',
                    job_desc:`是一家日本電子零件開發工廠於馬來西亞開立的分公司，
                    <br>當時就業的單位隸屬於該Tanashin的子公司。
                    <p>&nbsp</p>
                    主要負責工廠所需初始零件(螺絲，引擎等)的採買，
                    <br>本人負責的範圍是於國外廠商進行對接的部份。`,
                    supply_img:[],
                    scroll:`DONE`,
                }            
            ],
        }
    }

    });

resume_vue_004.mount('#resume_item_004');

