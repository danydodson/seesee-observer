import { CLOUD_DELIVERY } from '../../../../configs'

const src = props => {

  const base = CLOUD_DELIVERY
  const version = props.version
  const public_id = props.public_id

  const src = `${base}/c_fit,w_1000/v${version}/${public_id}`

  return `${src}`

}

export default src