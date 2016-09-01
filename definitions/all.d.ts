declare module 'vue' {
    var x: any
    export = x
}

declare module 'hyperscript' {
    var h: any
    export = h
}

declare function require(file: string): any;


interface Style {
    display?: "flex"|"none"
    borderRadius?: string
    flex?: string
    width?: string
    height?: string
    fontFamily?: string
    color?: string
    background?: string
    padding?: string
    margin?: string
    textAlign?: string|"center"
    alignContent?: "center"|"space-around"|"flex-end"|"flex-start"|"space-between",
    alignItems?: "center"|"space-around"|"flex-end"|"flex-start"|"space-between",
    justifyContent?: "center"|"space-around"|"flex-end"|"flex-start"|"space-between",

}