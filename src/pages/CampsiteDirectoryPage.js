import { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
import {selectCampsiteById} from '../features/campsites/CampsitesSlice'

const CampsiteDirectoryPage = () => {
   const [campsiteId, setCampsiteId] = useState(0);
   const selectedCampsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
                <Col sm='7' md='5'>
                    <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite = {selectedCampsite} />
                </Col>
            </Row>
        </Container>
    )
}

export default CampsiteDirectoryPage;