import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

export default function Rating({ rating }) {
	return (
		<div className="stars">
			{[1, 2, 3, 4, 5].map((star) => {
				if (rating >= star) {
					return <FontAwesomeIcon key={star} icon={faStar} />
				}

				if (rating >= star - 0.5) {
					return (
						<FontAwesomeIcon key={star}
							icon={faStarHalfStroke} />
					)
				}

				return (
					<FontAwesomeIcon key={star}
						icon={emptyStar} />
				);
			})}
		</div>
	);
}