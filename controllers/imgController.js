import FileModel from "../models/model.js";

// uploading the file to db
export const imgUploader = async (req, res) => {
    console.log(req.file);
    const { path, originalname } = req.file;
    const newFile = new FileModel({ path, name:originalname });
    try {
        await newFile.save();
        // console.log( `http://localhost:8000/file/${newFile._id}`)
        return res.status(200).json({ path: `http://localhost:8000/file/${newFile._id}` });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


// download the uploaded file
// while uploading we had sent the path as response
export const imgDownloader = async (req, res) => {
    const id = req.params.id;
    try {
        const file = await FileModel.findById(id);
        file.downloadContent++;
        await file.save();
        // we dont have to send the file, we have to download it
        res.download(file.path, file.name);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({message:err.message})
    }
}
