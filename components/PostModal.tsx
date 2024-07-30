import { useModalStore } from "@/store/useModalStore";
import { format } from "date-fns";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

type PostDataType = {
  id: string;
  title: string;
  status: "To do" | "In progress" | "Under review" | "Finished";
  priority: "Low" | "Medium" | "High" | "Urgent";
  deadline: number;
  description: string;
  postText: string;
};

const PostModal = () => {
  const closeModal = useModalStore((store) => store.closeModal);

  const [postData, setPostData] = useState<PostDataType>({
    id: "",
    title: "",
    description: "",
    status: "To do",
    deadline: new Date().getTime(),
    priority: "High",
    postText: "",
  });

  const postDataHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const formattedDate = format(postData.deadline, "yyyy-MM-dd");

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white w-[40%] h-full py-2 px-3">
      <form onSubmit={formHandler}>
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
            <button
              type="submit"
              className="flex bg-[#F4F4F4] py-2 px-2 text-[#797979] items-center justify-center gap-3"
            >
              Save
              <Image src="/plus-1.png" alt="" width={24} height={24} />
            </button>
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
        <div className="space-y-3">
          <input
            name="title"
            value={postData.title}
            className="h-[58px] w-full placeholder-shown:text-[48px] text-[48px] outline-none"
            type="text"
            placeholder="Title"
            onChange={postDataHandler}
            required
          />
          <div className="space-y-4">
            <div className="flex items-end gap-10">
              <label className="w-40 flex items-center gap-5" htmlFor="">
                <Image src="/status.png" alt="" width={24} height={24} /> Status
              </label>
              <select
                name="status"
                value={postData.status}
                onChange={postDataHandler}
              >
                <option value="To do">To do</option>
                <option value="In Progress">In progress</option>
                <option value="Under review">Under review</option>
                <option value="Finished">Finished</option>
              </select>
            </div>
            <div className="flex items-end gap-10">
              <label className="w-40 flex items-center gap-5" htmlFor="">
                <Image src="/priority.png" alt="" width={24} height={24} />{" "}
                Priority
              </label>
              <select
                name="priority"
                onChange={postDataHandler}
                value={postData.priority}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
            <div className="flex items-end gap-10">
              <label className="w-40 flex items-center gap-5" htmlFor="">
                <Image src="/deadline.png" alt="" width={24} height={24} />{" "}
                Deadline
              </label>
              <input
                value={formattedDate}
                onChange={postDataHandler}
                name="deadline"
                type="date"
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
                name="description"
                value={postData.description}
                onChange={postDataHandler}
                type="text"
                className="outline-none"
                placeholder="not selected"
                required
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
              name="postText"
              placeholder="Start writing, or drag your own files here."
              value={postData.postText}
              onChange={postDataHandler}
              required
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostModal;
