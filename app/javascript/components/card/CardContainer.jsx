import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { fetchCard } from "../../actions/CardActions";

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
  };
};

class CardContainer extends React.Component {
  componentDidMount = () => {
    this.props.onFetchCard();
  };

  render() {
    return this.props.card ? <Card card={this.props.card} /> : null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
