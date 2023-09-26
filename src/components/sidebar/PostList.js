export default function PostList({$target, testData}) {
    const $postList = document.createElement("div")
    $postList.className = "postList"
    $target.appendChild($postList)
    
    this.createTreeView = (data) => {
        let str = ''
        for (const key in data) {
            if (data[key].documents.length > 0) {
                str += `<li class="dataList">📄 ${data[key].title}
                    <button class="addBtn">➕</button>
                    <button class="delBtn">🗑️</button>
                    <ul>${this.createTreeView(data[key].documents)}</ul>
                </li>`
            } else {
                str += `<li class="dataList">📄 ${data[key].title}
                    <button class="addBtn">➕</button>
                    <button class="delBtn">🗑️</button>
                </li>` 
            }
        }

        return str
    }

    $postList.innerHTML = 
        `<ul>
            ${testData.map(document => 
                    `<li class="dataList">📄 ${document.title}
                        <button class="addBtn">➕</button>
                        <button class="delBtn">🗑️</button>
                    </li>
                    ${document.documents.length > 0 ? `<ul>${this.createTreeView(document.documents)}</ul>` : ''}
                    `
                ).join("")
            }
        </ul>`
    } 