import Comment from './comment.model.js';
import Publication from '../publication/publication.model.js';

export const addComment = async (req, res) =>{
    try{
        const { publicationId } = req.params;
        const { userName, textComment } = req.body;

        const publication = await Publication.findById(publicationId);

        if(!publication){
            return res.status(404).json({
                success: false,
                message: "Publication not found"
            });
        }

        const comment = new Comment({
            userName,
            textComment,
            publication: publicationId
        });

        await comment.save();

        res.status(200).json({
            success: true,
            comment
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Error adding comment",
            error: error.message
        })
    }
}

export const getCommentsByPublication = async (req, res) => {
    try {
        const { publicationId } = req.params;

        const comments = await Comment.find({ publication: publicationId })
            .populate('publication', 'title description')
            .sort({ createdAt: -1 });

        if (!comments) {
            return res.status(404).json({
                success: false,
                message: "No comments found for this publication"
            });
        }

        res.status(200).json({
            success: true,
            data: {
                comments
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching comments",
            error: error.message
        });
    }
}
