import { store } from "@/redux/store/store";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}
