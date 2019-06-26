import { connect } from 'react-redux'
import ShopList from '../components/ShopList'
import { getShopDetail } from '../actions/posting'

const mapStateToProps = (state) => {
  const length = state.shopList.length
  const currentState = state.shopList[length - 1]
  console.log(state)
  return { shops: currentState.items }
}

const PredictedShopList = connect(
  mapStateToProps,
  dispatch => ({dispatchGetShopDetail: place_id => dispatch(getShopDetail(place_id))})
)(ShopList)

export default PredictedShopList
