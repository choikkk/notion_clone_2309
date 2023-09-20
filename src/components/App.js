import Editor from "./Editor.js";
import Sidebar from "./Sidebar.js";

export default function App ({ $target }) {
    const initialState = []
    new Sidebar({ $target, initialState })
    new Editor({ $target })
}