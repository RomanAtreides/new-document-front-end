import axios from "axios";
import { useEffectEvent, useState } from "react";
import { toast } from "react-toastify";
import { AppConstants } from "../util/constants";
import { AppContext } from "./AppContext";

export const AppContextProvider = (props) => {
    const backendUrl = AppConstants.BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);

    const getUserData = async () => {
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.get(backendUrl + "/profile");

            if (response.status === 200) {
                setUserData(response.data);
            } else {
                toast.error("Unable to retrieve profile");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const getAuthState = async () => {
        try {
            const response = await axios.get(backendUrl + "/is-authenticated");

            if (response.status === 200 && response.data === true) {
                setIsLoggedIn(true);
                await getUserData();
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            if (error.response) {
                const msg = error.response.data?.message || "Authentication check failed";
                toast.error(msg);
            } else {
                toast.error(error.message);
            }
            setIsLoggedIn(false);
        }
    };

    useEffectEvent(() => {
        getAuthState();
    }, []);

    const contextValue = {
        backendUrl,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        getUserData,
    };

    return <AppContext.Provider value={{ contextValue }}>{props.children}</AppContext.Provider>;
};
