import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type AppType } from "next/app";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default api.withTRPC(MyApp);
