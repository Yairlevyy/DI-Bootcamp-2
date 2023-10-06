const getHome = (req,res) => {
    res.send('Home')
};

const getAbout = (req,res) => {
    res.send('About')
};

module.exports = {
    getHome,
    getAbout
}