import * as Vue from "vue"

const Cost = {

    data: () => ({

        style: {
            flex: "0 content",
            fontSize: "2em",
            padding: "0 1em"
        } as Style

    }),

    template: `<span :style="style" className="cost"><slot/> isk / m<sup>3</sup></span>`

}

const Name = {
    data: () => ({

        style: {
            flex: "0 content",
            padding: "1em",
            background: "rgb(200, 100, 0)"
        } as Style

    }),

    template: `<span :style="style" className="name"><slot/></span>`

}

const Calculated = {

    props: ["data"],

    data: () => ({

        style: {
            display: "flex",
            flex: "1 1 auto",
            border: "none",
            padding: "1em",
            background: "rgba(0,0,0, .25)",
            color: "#fff",
            textAlign: "center"
        } as Style

    }),


    template: `<input :style="style" placeholder="Enter some amount to calculate" type="text" v-model="data"/>`

}

Vue.component("mineral", {

    props: ["mineral"],
    
    data: () => ({

        amt: null,

        style: { 
            main: {
                display: "flex",
                flex: "1 1 auto",
                fontFamily: "Oswald",
                background: "rgba(0,0,0, .5)",
                padding: "1em",
                alignItems: "center",
                justifyContent: "space-around"
            } as Style,

            input: {
                display: "flex",
                flex: "1 1 auto",
                border: "none",
                padding: "1em",
                background: "rgba(0,0,0, .25)",
                color: "#fff",
                textAlign: "center"
            } as Style,

            total: {
                flex: "0 content",
                color: "rgb(0, 250, 90)",
                padding: "0 1em"
            } as Style
        }
    }),

    computed: {
        total() {
            let new_amt = this.amt

            if(/k|K$/.test(this.amt))
                new_amt = Number(this.amt.slice(0, -1)) * 1000
            return (new_amt * this.mineral.cost).toLocaleString() 
        },

        amount: {
            get() { return this.amt },
            set(val) {
                this.amt = val
            }
        }
        
    },

    methods: {
        scrubInput(ev) {
            const { value } = ev.target
            if(value === null || value === 0) this.amount = null
            else this.amount = value.toLocaleString()
        }
    },

    components: { "name": Name, "cost": Cost},

    template: `
    <div :style="style.main" className="mineral-info">
        <name>{{mineral.name}}</name>
        <cost>{{mineral.cost}}</cost>
        <input :style="style.input" placeholder="Enter an amount to calculated net gain" type="text" v-model="amount" lazy/>
        <div :style="style.total" v-if="amount != null">{{total}} isk</div>
    </div>
    `

})