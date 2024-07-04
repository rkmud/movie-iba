import { RootState, AppDispatch } from "src/store/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useEffect, useState } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useDebonce = <T>(value: T, delay = 500) => {
    const [debonceValue, setDebonceValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebonceValue(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debonceValue;
}