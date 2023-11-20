import { request } from "../../utils/api.js"


export default function NewBtn ({$target, initialState}) {
    const $btn = document.createElement("button")
    $target.appendChild($btn)

    this.state = initialState

    this.render = () => {
        $btn.textContent = this.state.text
        $btn.className = this.state.name
    }

    this.render()

    $btn.addEventListener('cilck', () => {
        const { link } = this.state
        pushUrl(`/documents/${link}`)
    })

}