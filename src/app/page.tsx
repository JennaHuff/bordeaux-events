import { List } from "./List";
import styles from "./page.module.css";

async function getData() {
    const response = await fetch(
        `https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/met_agenda/records?limit=20`
    );
    const data = await response.json();

    return data;
}

export interface IEvent {
    title_fr: string;
    keywords_fr: string[];
}

export default async function Home() {
    const data = await getData();
    const events: Array<IEvent> = data.results;

    return (
        <main className={styles.main}>
            <List events={events}></List>
        </main>
    );
}
