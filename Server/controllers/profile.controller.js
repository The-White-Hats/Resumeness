import { Resume } from '../models/resume.model.js'
import { CoverLetter } from '../models/cover-letter.model.js'

const ProfileController = {
    getProfile: async (req, res) => {
        const user = req.user
        try {
            const allResume = await Resume.find({ userID: user._id })
            const allCoverLetter = await CoverLetter.find({ userID: user._id })
            return res.status(200).json({
                message: "Here are All user's resumes and cover-letters",
                allResume,
                allCoverLetter
            })
        } catch (error) {
            return res
                .status(500).json({
                    error: 'An error occurred while getting Profile. Please try again.',
                })
        }
    },
    deleteProfile: async (req, res) => {
        const user = req.user
        try {
            await Resume.deleteMany({ userID: user._id })
            await CoverLetter.deleteMany({ userID: user._id })
            await user.deleteOne()
            return res.status(200).json({
                message: 'User is successfully deleted with all his/her resumes and cover-letters',
                user,
            })
        } catch (error) {
            return res
                .status(500).json({
                    error: 'An error occurred while deleting Profile. Please try again.',
                })
        }
    },
}

export default ProfileController
