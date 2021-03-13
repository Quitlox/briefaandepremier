import Head from "next/head";
import Page from "../components/page/Page";
import styles from "./index.module.scss";
import {LoremIpsum} from 'react-lorem-ipsum';

export default function Home() {
  return (
    <Page>
      <div className={`container-fluid`}>
        <div className={`row ${styles.sectionTitle}`}>
          <div className="col-12">
            <p className="display-1 text-center">Laat je Horen!</p>
            <p className="display-4 text-center">Brief aan de Premier</p>
          </div>
        </div>

        <div className={`row ${styles.sectionExplanation}`}>
          <div className="col-12">
          <LoremIpsum p={2}/>
          </div>
        </div>
      </div>
    </Page>
  );
}
