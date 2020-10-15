import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { fetchCard, updateCard } from "../../actions/CardActions";

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const card = state.cards.find((card) => +card.id === +id);
  return {
    card: card,
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
    displayLabelPopup: false,
    displayDueDatePopup: false,
  };

  componentDidMount = () => {
    this.props.onFetchCard();
  };

  toggleLabelClick = () => {
    this.setState({ displayLabelPopup: !this.state.displayLabelPopup });
  };

  toggleDueDatePopup = () =>
    this.setState({ displayDueDatePopup: !this.state.displayDueDatePopup });

  render() {
    return this.props.card ? (
      <Card
        card={this.props.card}
        onCardUpdate={this.props.onCardUpdate}
        displayLabelPopup={this.state.displayLabelPopup}
        displayDueDatePopup={this.state.displayDueDatePopup}
        toggleDueDatePopup={this.toggleDueDatePopup}
        toggleLabelClick={this.toggleLabelClick}
      />
    ) : null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
