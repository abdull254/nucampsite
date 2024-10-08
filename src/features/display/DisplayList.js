import {useSelector} from 'react-redux';
import {Col, Row} from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/CampsitesSlice';
import { selectFeaturedPromotion } from '../promotion/PromotionSlice';
import { selectFeaturedPartner } from '../partners/PartnersSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DisplayList = () => {
    const items = useSelector( (state) => [
        selectFeaturedCampsite(state), 
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]); 

    return (
        <Row>
            {items.map( (item, idx) => {
                const { featuredItem, isLoading, errMsg } = item;
                if(isLoading){
                    return(
                        <Loading key={idx} />
                    )
                }
                if(errMsg){
                    return(
                        <Error errMsg={errMsg}/>
                    )
                }
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