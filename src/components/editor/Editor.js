export default function Editor ({ $target }) {
    const $editor = document.createElement("div")
    $editor.className = "editorDiv"
    $target.appendChild($editor)
    $editor.innerHTML = `
        <input type="text" name="title" class="editorTitle value="" placeholder="제목 없음" autofocous />
        <textarea name="content" class="editorContent" placeholder="내용을 입력하세요" autofocous></textarea>
    `
}