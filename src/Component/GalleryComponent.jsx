import {motion} from "framer-motion";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'



function GalleryComponent({picture}){
    return(
        <motion.div
            layout
            animate={{ opacity:1}}
            initial={{ opacity:0}}
            exit={{ opacity:0}}
        
        >
            <h2>{picture.cat}</h2>
            <Gallery>
    <Item
      original={picture.css}
      thumbnail={picture.css}
      width="800"
      height="800"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={picture.css} alt="" />
      )}
    </Item>
    </Gallery>
            
        </motion.div>
    )
}

export default GalleryComponent;