import { useSelector } from'react-redux';
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/CampsitesSlice";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from "../features/comments/CommentList";
import SubHeader from '../components/SubHeader'
import Error from '../components/Error';
import Loading from '../components/Loading';

const CampsiteDetailPage = () => {
    const {campsiteId} = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));

    const isLoading = useSelector( (state) => state.campsites.isLoading);
    const errMsg = useSelector( (state) => state.campsites.errMsg);
    let content = null;

    if(isLoading){
        return (        
            content = <Loading/>
        )
    }

    if(errMsg){
        return (
            content = <Error errMsg={errMsg}/>
        )
    } else {
        content = (
            <>
                <CampsiteDetail campsite={campsite}/>
                <CommentsList campsteId={campsiteId} />
            </>
        ) 
    }
    return (
        <Container>
        { campsite && <SubHeader current={campsite.name} detail={true}/>}
            <Row>
                {content}
            </Row>
        </Container>
    )

}
export default CampsiteDetailPage;