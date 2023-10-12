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
        console.log(1)
        request('/documents', {
            method: 'POST',
            body: JSON.stringify({
                title: '수동등록',
                parent: null
            })
        })
    })


}