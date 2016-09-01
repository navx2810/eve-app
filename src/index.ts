import * as Vue from "vue"

Vue.config.devtools = true

require("./components")

new Vue({

    el: "#app",

    data: {

        minerals: [ {name: "Trit", cost : 3.54} ],

        style: {
            display: "flex",
        } as Style
        
    },

    template: `
    <div :style="style" className="app">
        <mineral :mineral="minerals[0]"/>
    </div>
    `    
})