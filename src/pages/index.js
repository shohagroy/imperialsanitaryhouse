import { Inter } from "next/font/google";
import { Result } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="h-screen flex-col flex justify-center items-center">
        <Result
          status="404"
          title="Next JS Initial Setup - Page Router"
          subTitle={
            <div>
              <p>Style with Tailwind and And Design</p>
              <p>Redux RTK Implement</p>
            </div>
          }
        />
      </main>
    </>
  );
}
