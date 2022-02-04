import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    getIsLoggedIn,
    getUserLoadingStatus,
    loadUsersList
} from "../../store/users";
import { loadQualitiesList } from "../../store/qualities";
import { loadProfessionsList } from "../../store/professions";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersStatusLoading = useSelector(getUserLoadingStatus());
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
        dispatch(loadQualitiesList());
        dispatch(loadProfessionsList());
    }, [isLoggedIn]);
    if (usersStatusLoading) return "loading...";
    return children;
};
AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default AppLoader;
