import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay : number) : T {
    const [deBounceValue, setDeBounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDeBounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    },[value, delay]);

    return deBounceValue;
}