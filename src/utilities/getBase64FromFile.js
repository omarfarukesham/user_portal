export default function getBase64FromFile(file, callback) {
  const reader = new FileReader();

  reader.onload = function () {
    const base64Image = reader.result.split(',')[1];
    callback(base64Image);
  };

  reader.readAsDataURL(file);
}
