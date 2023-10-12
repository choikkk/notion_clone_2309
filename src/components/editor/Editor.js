export default function Editor ({ $target, initialState }) {
    const $editor = document.createElement("div")
    $editor.className = "editorDiv"
    $target.appendChild($editor)

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }


    this.render = () => {
            $editor.innerHTML = `
            <input type="text" name="title" class="editorTitle value="" placeholder="제목 없음" autofocous />
            <textarea name="content" class="editorContent" placeholder="내용을 입력하세요" autofocous></textarea>
        `
    }
    
    this.render()
}