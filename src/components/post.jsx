import React from 'react'
import PropTypes from 'prop-types'

const formatResponces = count =>  count === 0 ? 'No responces' : `${count} responce${count > 1 ? 's': '' }`;
const formatTags = tags =>  tags && tags.length ? tags.join(',  '): '';

class Post extends React.Component {
    static propTypes = {
        tags: PropTypes.arrayOf(PropTypes.string.isRequired),
        text: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        responces:PropTypes.number.isRequired,        
    }; 

    static defaultProps = {
        tags: [],
        image: null,
    };

    state = {
        expanded: false,
    };
    
    onExpandClick = () => {
        const { expanded } = this.state;

        this.setState({ expanded: !expanded });
    };

    render() {
        const { image, text, title, responses, date, author, tags } = this.props;
        const { expanded } = this.state;   

        return (
            <div className="post">
                <div className="post__photo">
                    <div className="post__photo-container" >
                       {image && <img src={image} alt="" />}
                    </div>
                </div>
                <div className="post__info">
                    <div className="post__title">{title}</div>
                    <div className="post__additional_info">
                        <div>{date} // {author} // {formatTags(tags)}</div>
                        <div>{formatResponces(responses)}</div>    
                    </div>
                    <hr />
                    <div className="post__text">
                       {text} 
                       {expanded && <span className="post__hidden-text">{text}</span>}
                       <span className="post__expand-btn" onClick={this.onExpandClick}>({expanded ? 'LESS': 'MORE'}…)</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post
