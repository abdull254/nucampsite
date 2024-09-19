import { Col } from "reactstrap";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import { selectCommentsByCampsiteId } from "./CommentSlice";

const CommentsList = ( {campsteId}) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsteId));
    
    if (comments && comments.length> 0) {
        return (
            <Col>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment}/>;
                })}
            </Col>
        )
    }
    return (
        <Col md='5' className='m-1' >
            There are no commments for this campsite yet.
        </Col>
    )
}
export default CommentsList;