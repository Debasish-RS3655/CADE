// the custom hook for using gun in react native
// Debashish Buragohain

import { useContext } from "react";
import { GunContext } from '../provider';

export const useGun = () => {
    const { gun, error, loading } = useContext(GunContext);
    return { gun, error, loading };
}