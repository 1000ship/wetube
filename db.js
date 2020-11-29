import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
const handleOpen = () => console.log(`✅Connected to DB`);
const handleError = (error) => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

// export const videos = [
//     {
//         id: 324393,
//         title: 'Video awesome',
//         description: 'This is something I love',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "1000ship",
//             email: "cjstjdgur1234@gmail.com"
//         }
//     },
//     {
//         id: 55555,
//         title: 'Video nice',
//         description: 'This is something I love',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "1000ship",
//             email: "cjstjdgur1234@gmail.com"
//         }
//     },
//     {
//         id: 324393,
//         title: 'Video perfect',
//         description: 'This is something I love',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "1000ship",
//             email: "cjstjdgur1234@gmail.com"
//         }
//     },
//     {
//         id: 324393,
//         title: 'Video SUPERSUPER',
//         description: 'This is something I love',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "1000ship",
//             email: "cjstjdgur1234@gmail.com"
//         }
//     }
// ]