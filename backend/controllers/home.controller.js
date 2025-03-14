

export const getHome = async (req, res) => {
    try {
        console.log("hello")
        res.json({ "users": ["userOne", "userTwo", "userThree"] })
    } catch (error) {
        console.log("somehow broken")
    }  
}