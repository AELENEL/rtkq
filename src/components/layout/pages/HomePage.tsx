import { FC } from "react";
import scss from "./Home.module.scss";
import { useGetProductQuery } from "../../../store/api/product";

const HomePage: FC = () => {
  const { data, isLoading } = useGetProductQuery();
  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          {isLoading ? (
            <h1>load...</h1>
          ) : (
            data?.data.map((el) => <h1>{el.title}</h1>)
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
