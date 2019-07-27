import { connect } from "react-redux";
import { updateBounds } from "../actions/filter_actions";
import { fetchBenches } from "../actions/filter_actions";
import Search from "./Search";

const mapStateToProps = state => {
  return {
    benches: Object.values(state.entities.benches)
  };
};

const mapDispatchToProps = dispatch => ({
  updateBounds: () => dispatch(updateBounds()),
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
