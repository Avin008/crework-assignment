import Image from "next/image";
import PostModal, { PostDataType } from "./PostModal";

const CreatePostModal = ({
  postData,
  setPostData,
  setContainerHandler,
}: {
  postData: PostDataType;
  setPostData: any;
  setContainerHandler: any;
}) => {
  return (
    <div className="fixed left-0 z-10 right-0 flex py-2 justify-center top-0 bottom-0 bg-black/90">
      <PostModal
        postData={postData}
        setPostData={setPostData}
        setContainerHandler={setContainerHandler}
      />
    </div>
  );
};

export default CreatePostModal;
