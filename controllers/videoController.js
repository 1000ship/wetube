export const home = (req, res) => res.render("home", {pageTitle: "Home", potato: 12345})

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search",
        {pageTitle: "Search", searchingBy })
    
}

export const videos = (req, res) => {
    res.render("Videos", {pageTitle: "Video"})
}

export const upload = (req, res) => {
    res.render("Upload", {pageTitle: "Upload"})
}

export const videoDetail = (req, res) => {
    res.render("VideoDetail", {pageTitle: "Video Detail"})
}

export const editVideo = (req, res) => {
    res.render("EditVideo", {pageTitle: "Edit Video"})
}

export const deleteVideo = (req, res) => {
    res.render("DeleteVideo", {pageTitle: "Delete Video"})
}