import { Inter } from "next/font/google";
import { Result } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="h-screen flex-col flex justify-center items-center">
        <Result
          status="404"
          title="This Website Currently Devloping"
          subTitle={
            <div>
              <p>If You have any idea to share with me!</p>
            </div>
          }
        />
      </main>
    </>
  );
}
