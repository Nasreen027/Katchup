import React, { useEffect, useState } from "react";
import { useFirebase } from "./context/Firebase";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";
import { Spinner, Flex } from "@chakra-ui/react";

const AppRoutes = () => {
  const { token } = useFirebase();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      if (token !== null) {
        setLoading(false);
      }
    };

    fetchToken();
  }, [token]);

  if (loading) {
    return (
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <>
      {token ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
    </>
  );
};

export default AppRoutes;
