"use client";

import { useState } from "react";
import { EventTypeButton } from "./components/EventTypeButton";
import { IEvent } from "./page";
import styles from "./page.module.css";
import { Event } from "./Event";

export function List({ events }: { events: IEvent[] }) {
    let tags: string[] = [];
    events.map((event) =>
        event.keywords_fr?.map((keyword) => tags.push(keyword.toLowerCase()))
    );

    tags = Array.from(new Set(tags));

    const [types, setTypes] = useState<string[]>(tags);

    let filteredEvents = events.filter((event) =>
        event.keywords_fr
            ?.map((keyword) => types.includes(keyword.toLowerCase()))
            .includes(true)
    );

    console.log(types);

    return (
        <>
            <div className={styles.keywordsGrid}>
                {tags.map((tag, index) => (
                    <EventTypeButton
                        key={index}
                        name={tag}
                        types={types}
                        setTypes={setTypes}
                    />
                ))}
            </div>
            <div>
                <button onClick={() => setTypes(() => tags)}>
                    Tout selectionner
                </button>
                <button onClick={() => setTypes(() => [""])}>
                    Tout deselectionner
                </button>
            </div>
            <div className={styles.eventsGrid}>
                {filteredEvents.map((event, index) => (
                    <Event key={index} event={event} index={index} />
                ))}
            </div>
        </>
    );
}
