"use client";

import { Dispatch, SetStateAction, useState } from "react";
import styles from "../page.module.css";

export function EventTypeButton({
    name,
    types,
    setTypes,
}: {
    name: string;
    types: string[];
    setTypes: Dispatch<SetStateAction<string[]>>;
}) {
    const [selected, setSelected] = useState(false);

    return (
        <button
            onClick={() => {
                !selected
                    ? setTypes((types) => [...types, name])
                    : setTypes((types) =>
                          types.filter((type) => type !== name)
                      ),
                    setSelected((s) => !s);
            }}
            className={
                selected || types?.includes(name.toLowerCase())
                    ? styles.selectedTag
                    : ""
            }
        >
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </button>
    );
}
