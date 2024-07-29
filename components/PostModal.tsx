import { useModalStore } from "@/store/useModalStore";
import Image from "next/image";

const PostModal = () => {
  const closeModal = useModalStore((store) => store.closeModal);
  return (
    <div className="bg-white w-[40%] h-full py-2 px-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button onClick={closeModal}>
            <Image src="/close.png" alt="" width={24} height={24} />
          </button>
          <button>
            <Image src="/resize.png" alt="" width={24} height={24} />
          </button>
        </div>
        <div className="flex gap-4">
          {/* <button className="flex bg-[#F4F4F4] py-2 px-2 text-[#797979] items-center justify-center gap-3">
            Save
            <Image src="/save.png" alt="" width={24} height={24} />
          </button> */}
          <button className="flex bg-[#F4F4F4] py-2 px-2 text-[#797979] items-center justify-center gap-3">
            Share
            <Image src="/share.png" alt="" width={24} height={24} />
          </button>
          <button className="flex bg-[#F4F4F4] py-2 px-2 text-[#797979] items-center justify-center gap-3">
            Favorite
            <Image src="/favorite.png" alt="" width={24} height={24} />
          </button>
        </div>
      </div>
      <form className="space-y-3">
        <input
          className="h-[58px] w-full placeholder-shown:text-[48px] text-[48px] outline-none"
          type="text"
          placeholder="Title"
        />
        <div className="space-y-4">
          <div className="flex items-end gap-10">
            <label className="w-40 flex items-center gap-5" htmlFor="">
              <Image src="/status.png" alt="" width={24} height={24} /> Status
            </label>
            <input
              type="text"
              className="outline-none"
              placeholder="not selected"
            />
          </div>
          <div className="flex items-end gap-10">
            <label className="w-40 flex items-center gap-5" htmlFor="">
              <Image src="/priority.png" alt="" width={24} height={24} />{" "}
              Priority
            </label>
            <input
              type="text"
              className="outline-none"
              placeholder="not selected"
            />
          </div>
          <div className="flex items-end gap-10">
            <label className="w-40 flex items-center gap-5" htmlFor="">
              <Image src="/deadline.png" alt="" width={24} height={24} />{" "}
              Deadline
            </label>
            <input
              type="text"
              className="outline-none"
              placeholder="not selected"
            />
          </div>
          <div className="flex items-end gap-10">
            <label className="w-40 flex items-center gap-5" htmlFor="">
              <Image src="/description.png" alt="" width={24} height={24} />{" "}
              Description
            </label>
            <input
              type="text"
              className="outline-none"
              placeholder="not selected"
            />
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-5" htmlFor="">
              <Image src="/plus-1.png" alt="" width={24} height={24} /> Add
              custom property
            </label>
          </div>
        </div>
        <div className="">
          <textarea
            className="w-full border-t py-2 outline-none"
            name=""
            placeholder="Start writing, or drag your own files here."
            id=""
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default PostModal;
