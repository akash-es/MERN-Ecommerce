import pkg from 'cloudinary'
const { v2: cloudinary } = pkg
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer'




cloudinary.config({
    cloud_name: 'dv6zrpwqo',
    api_key: '853213142114639',
    api_secret: "kSxW2BwtvnPvA9NDIvi--56ynpo"
})

const productStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Ecommeres',
        format: () => 'png',
        public_id: Date.now,
    },


});
const productParser = multer({ storage: productStorage })




export { productParser }