import { useEffect } from "react";
import MetaData from "../../components/metadata/Metadata";
import { useGetProductsQuery } from "../../store/api/productsApi";
import ProductItem from "../../pages/product/productItem/ProductItem";
import Loader from "../../components/loader/Loader";
import toast from "react-hot-toast";
import CustomPagination from "../../components/customPagination/CustomPagination";
import { useSearchParams } from "react-router-dom";


const Home = () => {
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const keyword = searchParams.get("keyword") || "";
  const params = { page, keyword };

  const { data, isLoading, error, isError } = useGetProductsQuery(params);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError]);

  const columnSize = keyword ? 4 : 3;


  if (isLoading) return <Loader />;

  return (
    <>
      <MetaData title={"Buy Best Products Online"} />
      <div className="row">
        <div className="col-6 col-md-12">
          <h1 id="products_heading" className="text-secondary">
          {keyword
              ? `${data?.products?.length} Products found with keyword: ${keyword}`
              : "Latest Products"}
          </h1>

          <section id="products" className="mt-5">
            <div className="row">
              {data?.products?.map((product) => (
                // eslint-disable-next-line react/jsx-key
                <ProductItem product={product} columnSize={columnSize} />
              ))}
            </div>
          </section>
          <CustomPagination resPerPage={data?.resPerPage} filteredProductsCount={data?.filteredProductsCount}/>
        </div>
      </div>
    </>
  );
};

export default Home;
