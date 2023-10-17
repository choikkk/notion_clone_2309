import EditorPage from "./editor/EditorPage.js";
import PostPage from "./sidebar/PostPage.js";

export default function App ({ $target }) {
    const $listContainer = document.createElement('div')
    $listContainer.className = 'listContainer'
    const $rendingContainer = document.createElement('div')
    $rendingContainer.className = 'rendingContainer'

    $target.appendChild($listContainer)
    $target.appendChild($rendingContainer)
    
    const initialState = []
    const postPage = new PostPage({ 
        $target: $listContainer 
    })
    postPage.setState()

    const editorPage = new EditorPage({ 
        $target: $rendingContainer, 
        initialState: {
            postId: 'new',
            post: {
                title: '',
                content: ''
            }
        }
    })

    // editorPage.setState();
}