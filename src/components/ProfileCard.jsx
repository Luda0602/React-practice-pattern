import css from "./ProfileCard.module.css";
import { useState } from "react";
function ProfileCard({ name, job }) {
  const [followers, setFollowers] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  function follow() {
    setFollowers((prevFollowers) => prevFollowers + 1);
    setIsFollowing(true);
  }
  function unFollow() {
    setFollowers((prevFollowers) => prevFollowers - 1);
    setIsFollowing(false);
  }
  return (
    <div className={css.card}>
      <div className={css.avatar}>{name[0]}</div>
      <h1 className={css.name}>{name}</h1>
      <h2 className={css.job}>{job}</h2>
      <button className={css.button} onClick={isFollowing ? unFollow : follow}>
        {isFollowing ? "Відписатися" : "Підписатися"}
      </button>
      {isFollowing && <p className={css.message}>Ви підписані</p>}

      <p className={css.followers}>Підписників: {followers}</p>
    </div>
  );
}
export default ProfileCard;
