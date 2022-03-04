import {useEffect, useState} from "react";
import GalleryComponent from "../GalleryComponent";
import data from '../GalleryData';
import '../GalleryComponent.css';
import Filter from "../Filter"
import {motion, AnimatePresence} from "framer-motion";

function GalleryPage(){
    
    const [photos, setPhotos] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeCat , setActiveCat] = useState("all");
    useEffect(() => {
      fetchPhotos();
    }, [])
    

    const fetchPhotos = async() => {
        
        const pics = data;
    
        setPhotos(pics);
        setFiltered(pics);
    }
    
    return (
        <div className = "GalleryPage">
            
            <Filter photos={photos} setFiltered={setFiltered} activeCat={activeCat} setActiveCat={setActiveCat}/>
            <motion.div className="Photos">
                <AnimatePresence>
                {
                filtered.map((pic) =>{
                    return <GalleryComponent key={pic.id} picture={pic}/>
                })
                }
                </AnimatePresence>
            </motion.div>
        </div>
    )

}

export default GalleryPage;