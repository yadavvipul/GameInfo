import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

class GameItem extends Component {
    render() {
        let genres = this.props.data.genre.split(',');
        let genrelist = genres.map(function (genre, index) {
            return (
                <Chip key={index} style={{margin: '5% 0 5% 0'}}><Avatar size={32}>{genres[index][0]}</Avatar>{genre}</Chip>
            );
        }, this);

        return (
            <div className="box">
            <Card>
                <CardHeader
                    title={this.props.data.title}
                    subtitle={this.props.data.platform}
                    actAsExpander={false}
                    showExpandableButton={false}
                />
                <CardText>
                    <strong>Rating: {this.props.data.score} / 10</strong>
                    <div>
                        {this.props.data.genre !== '' && genrelist}
                        {this.props.data.editors_choice === 'Y' && <Chip style={{margin: '5% 0 5% 0'}}><Avatar size={32}>E</Avatar>Editors Choice</Chip> }
                    </div>
                    
                </CardText>
            </Card>
            </div>
        );
    }
}

export default GameItem;