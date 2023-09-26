import Editor from "./editor/Editor.js";
import PostPage from "./sidebar/PostPage.js";

export default function App ({ $target }) {
    const $listContainer = document.createElement('div')
    $listContainer.className = 'listContainer'
    const $rendingContainer = document.createElement('div')
    $rendingContainer.className = 'rendingContainer'

    $target.appendChild($listContainer)
    $target.appendChild($rendingContainer)
    
    const initialState = []
    new PostPage({ 
        $target: $listContainer 
    })
    new Editor({ 
        $target: $rendingContainer 
    })
}