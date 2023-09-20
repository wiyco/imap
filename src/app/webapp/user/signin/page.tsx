"use client";
import { useRouter } from "next/navigation";

import { BorderRoundButton } from "@/components/buttons/BorderRoundButton";
import { DummyPanel } from "@/components/layouts/DummyPanel";

import styles from "./page.module.scss";

export default function Page() {
  const router = useRouter();
  const onClick = () => {
    router.push("/webapp/user/signout");
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>アカウント</h1>

      <div className={styles.text}>IMAP会員へようこそ !</div>

      <div className={styles.button}>
        <div className={styles.size}>
          <BorderRoundButton fontSize="text-2xl" onClick={onClick}>
            &emsp;Sign IN&emsp;
          </BorderRoundButton>
        </div>
      </div>

      <div className={styles.dummy}>
        <div className={styles.panelsize}>
          <DummyPanel>
            <p className="break-words">
              こんにちは!!!!! 僕の名前は、、、、
              ピカソのフルネームはパブロ・ディエーゴ・ホセ・フランシスコ・デ・パウラ・ホアン・ネポムセーノ・マリーア・デ・ロス・レメディオス・クリスピーン・クリスピアーノ・デ・ラ・サンティシマ・トリニダード・ルイス・イ・ピカソ。
              です。。。 よろしくお願いします！！明日からよろしくお願いします！！
            </p>
          </DummyPanel>
        </div>
      </div>
    </div>
  );
}
