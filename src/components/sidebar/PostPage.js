import { request } from "../../utils/api.js"
import PostList from "./PostList.js"

export default function PostPage ({ $target }) {
    const $page = document.createElement("div")
    $page.className = 'documentDiv'
    $target.appendChild($page)

    // api 
    const data = request("/documents")

    const testData = [
        {
          "id": 1, // Document id
          "title": "노션을 만들자", // Document title
          "documents": [
            {
              "id": 2,
              "title": "블라블라",
              "documents": [
                {
                  "id": 3,
                  "title": "함냐함냐",
                  "documents": []
                }
              ]
            }
          ]
        },
        {
          "id": 4,
          "title": "hello!",
          "documents": []
        }
    ]

    new PostList({ 
      $target: $page,
      testData
    })

    // TODO: 컴포넌트화 시키기
    const $newBtn = document.createElement("button")
    $newBtn.textContent = "+ New Page"
    $newBtn.className = "addNew"
    $page.appendChild($newBtn)
  
    // this.state = testData
}