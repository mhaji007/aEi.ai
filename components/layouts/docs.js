import Link from "next/link";
import Sidebar from "./sidebar";

const DocsLayout = ({ children }) => (
  <div className="docs-container">
    <Sidebar />

    <div className="main">{children}</div>

    <style jsx>{`
      .docs-container {
        display: flex;
      }
      .sidebar {
        width: 200px;
        padding: 20px;
        background: #fafafa;
        overflow-y: auto;
        flex: 0 0 170px;
      }
      .main {
        padding: 20px;
        flex: 0 1 auto;
        overflow-y:auto;
      }
      a {
        display: block;
        font-size: 16px;
        margin-bottom: 5px;
      }
    `}</style>
  </div>
);

export default DocsLayout;
