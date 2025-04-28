import { useGetProductQuery } from "./store/api/product";

const App = () => {
  const { data, isLoading } = useGetProductQuery();
  console.log(data);
  
  return (
    <div className="blpock">
      {isLoading ? (
        <h1>load...</h1>
      ) : (
        data?.data.map((el) => <h1>{el.title}</h1>)
      )}
    </div>
  );
};

export default App;
