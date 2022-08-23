import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <div className="row p-5 " style={{maxWidth : '1200px', margin : "0 auto"}}>
      {categories.map((item) => (
        <div className="col-12 col-md-4">
          <CategoryItem item={item} key={item.id} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
