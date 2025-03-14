

export const getHome = async (req, res) => {
    try {
        res.json({ "users": ["userOne", "userTwo", "userThree"] })
    } catch (error) {
        console.log("somehow broken")
    }  
}