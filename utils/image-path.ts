export const getImagePath = (imagePath: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
};