import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

export function extractPublicId(url: string): string {
  const matches = url.match(/upload\/(?:v\d+\/)?(.+?)\.\w+$/);
  return matches ? matches[1] : "";
}

// Delete multiple images
export async function deleteCloudinaryImages(urls: string[]) {
  const publicIds = urls.map((url) => extractPublicId(url)).filter(Boolean);

  await Promise.all(
    publicIds.map((publicId) =>
      cloudinary.uploader.destroy(publicId, {
        resource_type: "auto",
        invalidate: true,
      })
    )
  );
}

export async function uploadImages(images: File[]) {
  return Promise.all(
    images.map(async (image) => {
      const buffer = await image.arrayBuffer();
      const array = new Uint8Array(buffer);

      return new Promise<string>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { folder: "products", resource_type: "auto" },
            (error, result) => {
              if (error) reject(error);
              resolve(result?.secure_url || "");
            }
          )
          .end(array);
      });
    })
  );
}
