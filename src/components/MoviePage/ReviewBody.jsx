import React, { useContext } from "react";
import { FaEdit, FaTrash, FaThumbsUp } from "react-icons/fa";
import { RiEmotionUnhappyLine, RiEmotionHappyLine } from "react-icons/ri";
import { BiAngry } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineLike, AiOutlineSmile } from "react-icons/ai";
import RatingStars from "./RatingStars";
import { UserContext } from "../../context/UserContext";

const ReviewBody = ({
  review,
  user,
  rating,
  onReaction,
  onUpdate,
  onDelete,
  reviewDetails,
  isUserLoggedIn,
  onUpdateReview,
  onDeleteReview,
}) => {
  const { user: currentUser } = useContext(UserContext);

  const reactions = [
    { type: "like", icon: <AiOutlineLike /> },
    { type: "love", icon: <AiOutlineHeart /> },
    { type: "haha", icon: <RiEmotionHappyLine /> },
    { type: "wow", icon: <AiOutlineSmile /> },
    { type: "sad", icon: <RiEmotionUnhappyLine /> },
    { type: "angry", icon: <BiAngry /> },
  ];

  const handleUpdateClick = () => {
    onUpdateReview(); // Call the onUpdateReview function when the "Update" icon is clicked
  };

  const handleTrashClick = async () => {
    try {
      // Make the API call to delete the review
      await onDeleteReview();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border rounded-md p-4">
      <div className="flex items-center gap-4">
        <img
          src={
            user.image == null
              ? "https://img.freepik.com/free-icon/user_318-159711.jpg"
              : `http://localhost:3001/uploads/${user.image}`
          }
          alt=""
          className="h-[40px] w-[40px] object-cover rounded-full"
        />
        <p className="text-[13px] sm:text-[15px] md:text-base">
          Review by <span className="font-semibold">{user.username}</span>
        </p>

        <RatingStars rating={rating} />

        {isUserLoggedIn && (
          <div className="flex items-center ml-5 gap-3 sm:gap-6">
            <FaEdit
              className="cursor-pointer text-[#305973] w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
              onClick={handleUpdateClick}
            />
            <FaTrash
              className="cursor-pointer text-[#305973] w-3 h-3  sm:w-4 sm:h-4 md:w-5 md:h-5"
              onClick={handleTrashClick}
            />
          </div>
        )}

        {currentUser?.user[0]?.userType === "admin" && (
          <div className="flex items-center ml-5 gap-3 sm:gap-6">
            <FaTrash
              className="cursor-pointer text-[#305973] w-3 h-3  sm:w-4 sm:h-4 md:w-5 md:h-5"
              onClick={handleTrashClick}
            />
          </div>
        )}
      </div>

      <p className="text-sm ml-[55px] sm:text-base md:text-lg pb-2">{review}</p>

      <div className="flex ml-[55px] items-center justify-between mt-2">
        <div className="flex items-center space-x-4">
          {reactions.map((reaction) => (
            <div
              key={reaction.type}
              className="cursor-pointer"
              onClick={() => onReaction(reaction.type)}
            >
              {reaction.icon}
              <span className="ml-1">
                {reviewDetails?.reactions?.[reaction.type]?.length || 0}
              </span>
            </div>
          ))}
        </div>
        {user && review.userId === user._id && (
          <div className="flex space-x-2">
            <FaEdit className="cursor-pointer" onClick={onUpdate} />
            <FaTrash className="cursor-pointer" onClick={onDelete} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewBody;
