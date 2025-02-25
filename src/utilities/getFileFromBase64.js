export default function getFileFromBase64(
  base64String,
  filename = 'image.png',
  mimeType = 'image/png',
) {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimeType });

  // Create a File from the Blob
  const file = new File([blob], filename, { type: mimeType });
  return file;
}
