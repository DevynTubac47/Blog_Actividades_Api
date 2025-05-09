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

export const updatePublication = async (req, res) =>{
    try{
        const { publicationId } = req.params;
        const data = req.body;

        const publication = await Publication.findByIdAndUpdate(publicationId, data, {new: true})

        if (!publication) {
            return res.status(404).json({
                success: false,
                message: "Publication not found"
            });
        }

        res.status(200).json({
            success: true,
            publication
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Error update publication",
            error: error.message
        })
    }
}

export const deletePublication = async (req, res) =>{
    try{
        const { publicationId } = req.params;

        const publication = await Publication.findByIdAndDelete(publicationId);
        
        if (!publication) {
            return res.status(404).json({
                success: false,
                message: "Publication not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Publication eliminada exitosamente"
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Error delete publication",
            error: error.message
        })
    }
}

export const getPublicationsIndex = async (req, res) =>{
    try{
        const publications = await Publication.find()
        .sort({ dateCreated: -1 })
        .limit(4);
        
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

export const getPublicationById = async (req, res) => {
    try {
        const { publicationId } = req.params;

        const publication = await Publication.findById(publicationId);

        if (!publication) {
            return res.status(404).json({ 
                success: false,
                message: "Publicación no encontrada" 
            });
        }
        res.status(200).json({ 
            success: true,
            data: {
                publication
            }
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: "Error al obtener la publicación",
            error: error.message
        });
    }
};



