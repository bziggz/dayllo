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
  componentDidMount = () => {
    this.props.onFetchCard();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.card !== this.props.card) {
      this.setState({
        title: this.props.card.title,
        description: this.props.card.description,
      });
    }
  };

  render() {
    return this.props.card ? (
      <Card card={this.props.card} onCardUpdate={this.props.onCardUpdate} />
    ) : null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
