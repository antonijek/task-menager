const UploadFile = ({ setFile, name, onChange }) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return <input type="file" name={name} onChange={onChange} />;
};

export default UploadFile;
