import {v2 as cloudinary} from "cloudinary"
import fs from "fs" // file system
      
cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME , 
  api_key:process.env.CLOUDINARY_API_KEY , 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const UploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath){
            return null
        }
        //upload the file on cloudinary
         const upload_response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file uploaded successfully
        console.log(`File is uploaded on cloudinary :  ${upload_response.url}`)
        fs.unlinkSync(localFilePath)
        return upload_response
    } catch (error) {
        fs.unlinkSync(localFilePath) // to remove malicious files which are saved locally in server when upload operation gets failed
        return null
    }
}

export {UploadOnCloudinary}

