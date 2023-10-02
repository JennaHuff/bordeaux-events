"use client";
import { IEvent } from "./page";
import styles from "./page.module.css";

export function Event({ index, event }: { index: number; event: IEvent }) {
    return (
        <div key={index} className={styles.eventCard}>
            <h3>
                {index + 1}: {event.title_fr}
            </h3>
            {event.keywords_fr?.map((keyword: string, key) => (
                <span key={key}>
                    {keyword.charAt(0).toUpperCase() + keyword.slice(1)}
                </span>
            ))}
        </div>
    );
}
