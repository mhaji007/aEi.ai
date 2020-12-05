import Link from "next/link";
import Sidebar from "./sidebar";

const DocsLayout = ({ children }) => (
  <div className="docs-container">
    <Sidebar/>

    <div className="main">{children}</div>

    <style jsx>{`

    .docs-container {
      display: grid;
      grid-template-columns: auto 1fr

    }

.main {
  // padding: 20px;
  // flex: 0 1 auto;
  flex: 0 1 auto;
  // overflow-y:auto;
  height:100vh;
}
a {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}

// .sidebar {
//         width: 200px;
//         padding: 20px;
//         background: #fafafa;
//         overflow-y: auto;
//         flex: 0 0 170px;
//       }
`}</style>
  </div>
);

export default DocsLayout;
