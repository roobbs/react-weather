import Header from "./Header";
import SideBar from "./SideBar";

export default function Content() {
  return (
    <div className="main">
      <Header city={"City you looked for"} />
      <div className="content">
        <SideBar />
      </div>
    </div>
  );
}
