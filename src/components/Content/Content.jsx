import Row from "../Row/Row";
import { RowData } from "../../constants";

const Content = () => {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "black",
        color: "white",
        overflow: "hidden",
      }}
    >
      {RowData.map((item) => {
        return (
          <Row key={item.name + item.url} url={item.url} title={item.title} />
        );
      })}
    </div>
  );
};

export default Content;