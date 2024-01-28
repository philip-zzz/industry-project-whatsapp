import "./ImageList.scss"
import initialImage from "../../Data/image-list.json"
import leftArrow from "../../assets/green-arrow-left.png"
import rightArrow from "../../assets/green-arrow-right.png"
import greenArrow from "../../assets/green-arrow.png"
import { useState } from "react";

function ImageList() {

    const [startIndex, setStartIndex] = useState(0);
    const [imageList, setImageList] = useState(initialImage)
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const [isZoomed, setZoom] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisibility(!isDropdownVisible);
      };

    const toggleZoom = () =>{
        setZoom(!isZoomed)
    }

    const itemsPerPage = 3;

    const visibleImages = imageList.slice(startIndex, startIndex+itemsPerPage) 

    const handleNextClick = ()=>{
        setStartIndex((prevIndex)=> prevIndex+1)
    }

    const handlePreviousClick = ()=>{
        setStartIndex((prevIndex)=> prevIndex-1)
    }

    return (
        <div className="main-component">
        <div className="arrow-container">
            <img onClick={toggleDropdown} className="green-arrow" src={greenArrow} alt="green arrow" />
        </div>
        <div className={isDropdownVisible ? "image-component" : "image-component-hide"}>
        <div className="image-container">
            <img className="left-arrow" onClick={handlePreviousClick} src={leftArrow} alt="left arrow" />
            <ul className="image-list">
                {visibleImages.map((image, index)=>(
                    <li key={image.id} className={`image-list__list-item ${index === 1 && isZoomed ? `zoomed` : ``}`}>
                        <img className="christmas-img" src={image.url} alt="christmas greeting" />
                        <div className={`${index ===1 && isZoomed ? `zoomed-button` : `hide-button`}`}>
                            <div className="zoomed__actions-subcontainer">
                            <p className="zoomed__zoom-out" onClick={toggleZoom}>Zoom out</p>
                            <p className="zoomed__send">Send</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <img className="right-arrow" onClick={handleNextClick} src={rightArrow} alt="right arrow" />
        </div>
        <div className="actions">
            <div className="actions-subcontainer">
            <p className="zoom-in" onClick={toggleZoom}>Zoom in</p>
            <p className="send">Send</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default ImageList;