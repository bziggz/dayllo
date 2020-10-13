import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { fetchCard, updateCard } from "../../actions/CardActions";

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    card: state.cards.find((card) => {
      return +card.id === +id;
    }),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const id = props.match.params.id;
  return {
    onFetchCard: () => {
      dispatch(fetchCard(id));
    },
    onCardUpdate: (state) => {
      state.id = id;
      dispatch(updateCard(state));
    },
  };
};

class CardContainer extends React.Component {
  state = {
    title: '',
    description: '',
    editMode: false,
  }

  componentDidMount = () => {
    this.props.onFetchCard();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.card !== this.props.card) {
      this.setState({title: this.props.card.title, description: this.props.card.description});
    }
  }

  onDescriptionChange = (description) => {
    this.setState({description});
  }

  onTitleChange = (title) => {
    this.setState({title});
  }

  handleBlur = () => {
    this.props.onCardUpdate({title: this.state.title});
  };

  onEditDescriptionClick = () => {
    this.setState({editMode: true});
  }

  render() {
    return this.props.card ? <Card card={this.props.card} onTitleChange={this.onTitleChange} title={this.state.title} handleBlur={this.handleBlur} description={this.state.description} onDescriptionChange={this.onDescriptionChange} onEditDescriptionClick={this.onEditDescriptionClick} editMode={this.state.editMode}/> : null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
