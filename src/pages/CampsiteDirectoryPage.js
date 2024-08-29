import { Container, Col, Row, Button } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsites/CampsitesSlice";

const CampsiteDirectoryPage = () => {
    let selectedCampsite = selectRandomCampsite();
    
    const toggleCompsite = () =>{
        selectedCampsite = selectRandomCampsite();
        console.log(selectedCampsite);
    }
    return (
        <Container>
            <Button onClick={()=> toggleCompsite()}>
                Select Random Campsite
            </Button>
            <Row>
                <Col sm='7' md='5'>
                    <CampsitesList/>
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite = {selectedCampsite} />
                </Col>
            </Row>
        </Container>
    )
}

export default CampsiteDirectoryPage;