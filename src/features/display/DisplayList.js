import {Col, Row} from 'reactstrap';
import DisplayCard from './DisplayCard'
import { selectFeaturedCampsite } from '../campsites/CampsitesSlice';
import { selectFeaturedPromotion } from '../promotion/PromotionSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [selectFraturedCampste(), selectFeaturedPromotion()];
    const 

    return (
        <Row>
            {items.map( (item, idx) => {
                return (
                    <Col md className='m-1' key={idx} >
                        <DisplayCard item={item}/>
                    </Col>
                )
            })}
        </Row>
    )
}

export default DisplayList;