import Header from "./Header";
import PageIllustration from './PageIllustration';
import FeaturesBlocks from './FeaturesBlocks';
import FeaturesZigZag from './FeaturesZigzag';
import Newsletter from './Newsletter';


export default function HomePage(){
    return(
        
        <div>
            <Header/>
            
            <PageIllustration />
            <FeaturesBlocks />
            <FeaturesZigZag />
            <Newsletter />
            
        </div>
    )
}