import { Box, ImageList, ImageListItem, } from '@mui/material'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { images } from '../../assets/images'

const CollageBackground = () => {
    function shuffleArray(array:any) {
        
        const shuffledArray = [...array];
        
        // Fisher-Yates shuffle algorithm
        for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }
    


    const shuffledImages = shuffleArray(images);

    // State to track the loaded state of each image
    const [loadedImages, setLoadedImages] = useState([]);

    // Function to mark an image as loaded
    const handleImageLoad = (imageIndex:any) => {
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, imageIndex]);
    };

    return (
        <div className="video-container">
            <Box sx={{ width: "100%", height: "100vh", }}>
                <ImageList className='sm:hidden' variant="masonry" cols={4} gap={2}>
                    {shuffledImages.map((item, index) => (
                    <ImageListItem key={item.image}>
                    {/* Display low-quality image initially */}
                    <img
                        src={`${item.image}?w=100&fit=crop&auto=format`}  // Use a lower-quality image here
                        alt='Images of me and my family is a quilt'
                        style={{ filter: loadedImages.includes(index) ? 'none' : 'blur(20px)' }}
                    />

                    {/* Load high-quality image in the background */}
                    <img
                        src={`${item.image}?w=248&fit=crop&auto=format`}  // Use the high-quality image here
                        alt='Images of me and my family is a quilt'
                        style={{ display: 'none' }}
                        onLoad={() => handleImageLoad(index)}  // Mark the image as loaded
                    />
                    </ImageListItem>
                    ))}
                </ImageList>
                <ImageList className='hidden sm:block' variant="masonry" cols={12} gap={4}>
                {shuffledImages.map((item, index) => (
                    <ImageListItem key={item.image}>
                    {/* Display low-quality image initially */}
                    <img
                        src={`${item.image}?w=100&fit=crop&auto=format`}  // Use a lower-quality image here
                        alt='Images of me and my family is a quilt'
                        style={{ filter: loadedImages.includes(index) ? 'none' : 'blur(20px)' }}
                    />

                    {/* Load high-quality image in the background */}
                    <img
                        src={`${item.image}?w=248&fit=crop&auto=format`}  // Use the high-quality image here
                        alt='Images of me and my family is a quilt'
                        style={{ display: 'none' }}
                        onLoad={() => handleImageLoad(index)}  // Mark the image as loaded
                    />
                    </ImageListItem>
                ))}
                </ImageList>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: .01 }}
                    transition={{ duration: 0.75 }} 
                    className="overlay2"
                />
            </Box>
        </div>
    )
}

export default CollageBackground