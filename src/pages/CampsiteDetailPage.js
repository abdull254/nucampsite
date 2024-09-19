import { useSelector } from'react-redux';
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/CampsitesSlice";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from "../features/comments/CommentList";
import SubHeader from '../components/SubHeader'

const CampsiteDetailPage = () => {
    const {campsiteId} = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true}/>
            <Row>
                <CampsiteDetail campsite={campsite}/>
                <CommentsList campsteId={campsiteId} />
            </Row>
        </Container>
    )

}
export default CampsiteDetailPage;