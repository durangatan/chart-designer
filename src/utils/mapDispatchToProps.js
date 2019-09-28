function bindActionCreator(actionCreator, dispatch) {
  return (...args) => {
    return dispatch(actionCreator.apply(this, args))
  }
}
export default function mapDispatchToProps(actionCreators, dispatch) {
  return Object.keys(actionCreators).reduce((acc, key) => {
    acc[key] = bindActionCreator(actionCreators[key], dispatch)
    return acc
  }, {})
}
