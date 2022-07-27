import Title from "../Title";
import Customers from "./Customers";

function index() {
  return (
    <div style={{ marginTop: "100px" }} id="feedback">
      <Title titleName={"Mijozlarimizning biz haqimizdagi fikrlari"} />
      <Customers />
    </div>
  );
}

export default index;
