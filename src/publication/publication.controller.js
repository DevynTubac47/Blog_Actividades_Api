'use strict'

import Publication from './publication.model.js';

export const addPublication = async (req, res) =>{
    try{
        const data = req.body;

        const publication = new Publication({
            ...data
        });

        await publication.save();

        res.status(200).json({
            success: true,
            publication
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Error publishing",
            error: error.message
        })
    }
}

export const getPublications = async (req, res) =>{
    try{
        const publications = await Publication.find().sort({dateCreated: -1});

        res.status(200).json({
            success: true,
            publications
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Error getting publications",
            error: error.message
        })
    }
}

export const getPublicationsCourse = async (req, res) =>{
    try{
        const { course } = req.params;

        const publications = await Publication.find({course}).sort({dateCreated: -1});

        res.status(200).json({
            success: true,
            publications
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Error getting publications",
            error: error.message
        })
    }
}
