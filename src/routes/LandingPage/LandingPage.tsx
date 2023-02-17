import React, { useState, useCallback } from "react";
import Explore from "../../components/Explore";
import Slide from "../../components/Categories";
import FilterModal from "../../components/FilterModal";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(true);

  const control_modal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);
  return (
    <div>
      <Slide onclick={control_modal} />
      <Explore />
      <FilterModal />
    </div>
  );
};

export default LandingPage;
