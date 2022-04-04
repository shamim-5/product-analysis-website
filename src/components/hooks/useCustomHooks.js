import axios from "axios";
import { useEffect, useState } from "react";

const useCustomHooks = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("review.json").then((res) => setReviews(res.data));
  }, []);
  return [reviews, setReviews];
};

export default useCustomHooks;
