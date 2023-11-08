import { store } from "@/redux/store/store";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}
