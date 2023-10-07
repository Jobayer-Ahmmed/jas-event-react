import PropTypes from 'prop-types';

const Card = ({data}) => {
  const {title, description, price, image}=data

  return (
    <div className="card w-full bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={image} alt="image" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p>{description.slice(0-10)}</p>
      <p className=' font-bold'>Price : {price}</p>
      <div className="card-actions">
        <button className="btn bg-green-700 text-gray-200 hover:bg-green-800">See Details</button>
      </div>
    </div>
  </div>
  )
}

Card.propTypes={
  data: PropTypes.object.isRequired,
}

export default Card