import Dashboard from "../components/Dashboard";
import Head from "../components/Head";
import { NextPage } from "next";
import { Typography } from "@material-ui/core";
import { useUser } from "../context/user";

const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <>
      <Head page="Home" />

      <main>
        <Typography variant="h3" aria-label="title">
          Welcome.
        </Typography>

        {/* {user && user.auth && <Dashboard />} */}
        <Dashboard />
      </main>
    </>
  );
};

export default Home;
