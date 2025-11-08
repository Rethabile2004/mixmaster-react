import { Link, Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const HomeLayout = () => {
  // const navigation = useNavigation();
  // console.log(navigation);
  // const value = 'rethabile';
  return (
    <div>
      <Navbar />
      <section className="page">
        {navigation.state == 'loading' ?
          <>
            <div className="loading" />
            <h3>loading...</h3>
          </>
          : <Outlet/>}
      </section>

    </div>
  );
};
export default HomeLayout;
