import {useSelector} from 'reduxjs/toolkit';
import {Col, Row} from 'reactstrap';
//import DisplayCard from './DisplayCard'
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/CampsitesSlice';
import { selectFeaturedPromotion } from '../promotion/PromotionSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = useSelector( (state) => [
        selectFeaturedCampsite(), 
        selectFeaturedPromotion(),
        selectFeaturedPartner()
    ]); 

    return (
        <Row>
            {items.map( (item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx} >
                            <AnimatedDisplayCard item={item}/>
                        </Col>
                    )   
                )
            })}
        </Row>
    )
}

export default DisplayList;