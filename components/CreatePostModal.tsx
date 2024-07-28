import Image from "next/image";
import PostModal from "./PostModal";

const CreatePostModal = () => {
  return (
    <div className="fixed left-0 z-10 right-0 flex py-2 justify-center top-0 bottom-0 bg-black/90">
      <PostModal />
    </div>
  );
};

export default CreatePostModal;
