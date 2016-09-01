export class StyleBuilder {

    private obj: Style

    private constructor() {}

    static from() {
        let builder = new StyleBuilder()
        builder.obj = {}

        return builder
    }

    get displayFlex() { this.obj.display = "flex"; return this }
    bg(bg: string) { this.obj.background = bg; return this }
    textAlign(s: string) { this.obj.textAlign = s; return this }

    get style() { return this.obj }

}