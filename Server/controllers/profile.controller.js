
const ProfileController = {
    getProfile: async (req, res) => {
        const user = req.user;
        try {
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: "An error occurred while getting Profile. Please try again." });
        }
    }
}

export default ProfileController;