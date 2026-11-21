// Wedding photographs copied from the mmimagesweddings project.
// Replace a file in public/photos/weddings with the same name to update it.
const numberedPhotos = (prefix: "hero" | "gallery", count: number, digits: number) =>
  Array.from(
    { length: count },
    (_, index) => `/photos/weddings/${prefix}-${String(index + 1).padStart(digits, "0")}.jpg`,
  );

export const heroPhotos = numberedPhotos("hero", 9, 2);
export const galleryPhotos = numberedPhotos("gallery", 107, 3);

export const aboutPhoto = "/photos/weddings/about.jpg";
export const packagesPhoto = "/photos/weddings/packages.jpg";
export const contactPhoto = "/photos/weddings/contact.jpg";
