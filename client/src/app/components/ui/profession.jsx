import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getProfessionsById,
    getProfessionsLoadingStatus,
    loadProfessionsList
} from "../../store/professions";

const Profession = ({ id }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getProfessionsLoadingStatus());
    const prof = useSelector(getProfessionsById(id));
    useEffect(() => {
        dispatch(loadProfessionsList());
    }, []);
    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else return "loading ...";
};
Profession.propTypes = {
    id: PropTypes.string
};
export default Profession;
