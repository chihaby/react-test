import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail
                author="Sam"
                date="today at 4:30PM"
                comment="oh nice dude!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Alex"
                date="today at 5:00PM"
                comment="yep!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                date="today at 7:30PM"
                comment="What! are you serious"
                avatar={faker.image.avatar()}
            />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));

