import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { LuUpload } from "react-icons/lu";
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
import { addUser } from "../imagepost";
import { imgshow } from "../imageget";
import '../page/home.css';
import axios from "axios";

function Imgupload(props) {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const dispatch = useDispatch();
    // const [generatedImage, setGeneratedImage] = useState(null);
    const [loadings, setLoading] = useState(true);
    const [bck, setbck] = useState(false);

    // const [errors, setError] = useState(null)
    const { loading, error, validationStatus } = useSelector((state) => state.user);
    var { loadingget, errorget, imagegetval } = useSelector((state) => state.imagegetvalue);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
        }
    };

    const getdata = (e) => {
        console.log("loading");

      setbck(true)
        e.preventDefault();
            if (image  ) {
                if(props.themepromt ==="MINIMALISTIC MODERN"){
                    var promt="minimalist bedroom with a full-size bed, laminate flooring, neutral walls, and sheer curtains."
                    dispatch(addUser(image,promt));
                    console.log("loading minimalist");
                }else{
                    var promt="traditional bedroom with a king-size bed, carpet flooring, cream walls, and velvet curtains."
                    dispatch(addUser(image,promt));
                    console.log("loading luxurious");
                }
            
        } 
    };

    // const fetchGeneratedImage = async () => {
    //   setLoading(true);
    //   setError(null);
    //   try {
    //     const response = await axios.get("http://localhost:5005/send_generated_output", {
    //       responseType: 'blob', // Ensure the response is a Blob
    //     });
        
    //     // Create an object URL from the Blob
    //     const imageObjectURL = URL.createObjectURL(response.data);
    
    //     setGeneratedImage(imageObjectURL);
    //     console.log("done", response.data);
    //   } catch (error) {
    //     console.log(error);
    //     setError('An error occurred while fetching the generated image.');
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    
    useEffect(() => {
        if (!loading && validationStatus === 'success') {
            console.log("Image upload successful.");
            // fetchGeneratedImage()
            dispatch(imgshow())
        }
    }, [loading, validationStatus]);

    useEffect(() => {
        if ( imagegetval) {
            console.log("Image fetched", imagegetval);
            props.resfun(imagegetval,bck,preview)
        }
    }, [imagegetval]);

    return (
      <>
      {loadings && <div className="image-uploader">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="file-input"
                style={{ display: 'none' }}
            />
            <button
                className="custom-file-upload"
                onClick={() => document.getElementById('file-input').click()}
            >
                UPLOAD YOUR ROOM <LuUpload />
            </button>
            {preview && (
                <div className='preview'>
                    <img src={preview} alt="Preview" className="image-preview" />
                    <Button onClick={getdata}>
                        REVAMP <FaArrowRight style={{ width: "15%" }} />
                    </Button>
                </div>
            )}
            {/* {generatedImage && (
                <div className='generated-image'>
                    <h3>Generated Image:</h3>
                    <img src={generatedImage} alt="Generated" className="generated-preview" />
                </div>
            )} */}
                 {/* {imagegetval && (
                <div className='generated-image'>
                    <h3>Generated Image:</h3>
                    <img src={imagegetval} alt="Generated" className="generated-preview" />
                </div>
            )} */}
        </div>}
      </>
       
    );
}

export default Imgupload;
