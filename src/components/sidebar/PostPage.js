import NewBtn from "../\bbutton/NewBtn.js"
import { request } from "../../utils/api.js"
import PostList from "./PostList.js"

export default function PostPage ({ $target }) {
    const $page = document.createElement("div")
    $page.className = 'documentDiv'
    $target.appendChild($page)

    const postList = new PostList({ 
      $target: $page,
      initialState: [],
      onAttach: async () => {
        await request('/documents', {
           method: 'POST',
           body: {}
        })
        this.setState()
      },
      onDelete: async () => {
        await request('/documents', {
          method: 'DELETE'
        })
        this.setState()
      }
    })
    
    new NewBtn({
      $target: $page,
      initialState: {
        text: '+ New Page',
        name: 'addNew'
      }
    })
    
    this.setState = async () => {
      const posts = await request('/documents')
      postList.setState(posts)
      this.render()
    }

    this.render = () => {
        $target.appendChild($page)
    }
}