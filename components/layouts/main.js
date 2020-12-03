// import Header from '../header';

const MainLayout = ({ children }) => (
  <div className="main-container">
    {/* <Header /> */}

    <div className="content-wrapper">{children}</div>

  </div>
);

export default MainLayout;
