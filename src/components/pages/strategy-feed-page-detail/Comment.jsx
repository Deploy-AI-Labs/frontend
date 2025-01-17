import { useState } from "react";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { Icons } from "../../icon/icons";
import { formatDate, generateRandomUser } from "../../../lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../../../services/comment";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { User } from "lucide-react";

export default function Comment({ data }) {
  const [commentMessage, setCommentMessage] = useState("");

  const queryClient = useQueryClient();
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data) => createComment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["script"] });
    },
  });

  const addComment = async () => {
    if (commentMessage.length === 0)
      return toast.error("Plz dont send empty comment");
    try {
      const author = generateRandomUser();
      await mutateAsync({
        scriptId: data.id,
        content: commentMessage,
        author: author,
      });
      setCommentMessage("");
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error.message);
      else toast.error("Something went wrong");
    }
  };

  return (
    <div className="lg:ml-[38px] mt-16 lg:mt-[86px]">
      <h1 className="text-[32px] font-heading text-primary mb-4 lg:mb-[22px]">
        {data?.comments
          ? data.comments.length > 1
            ? `${data.comments.length} Comments`
            : `${data.comments.length} Comment`
          : "0 Comment"}
      </h1>
      <div className="flex flex-col gap-2 items-end">
        <Textarea
          value={commentMessage}
          onChange={(e) => setCommentMessage(e.target.value)}
          placholder="Leave comments here..."
        />
        <Button disabled={isLoading} onClick={addComment} className="ml-auto">
          Post <Icons.send />
        </Button>
      </div>

      <div className="mt-6 space-y-6">
        {data?.comments?.map((item, index) => (
          <CommentItem
            key={index}
            author={item.author}
            comment={item.content}
            time={formatDate(new Date(item.createdAt))}
          />
        ))}
      </div>
    </div>
  );
}

const CommentItem = ({ author, time, comment }) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="size-[42px] bg-foreground-100 flex items-center justify-center rounded-full">
          {/* <img
            src="https://picsum.photos/250"
            alt="profile"
            className="size-full rounded-full object-cover"
          /> */}
          <User className="text-background" />
        </div>
        <div className="space-y-1">
          <h2 className="text-secondary-50 text-sm">
            {/* {shortenAddress(address, 4, 3)} */}
            {author}
          </h2>
          <p className="text-xs">{time}</p>
        </div>
      </div>

      <p className="text-foreground-100 text-sm">{comment}</p>

      {/* <div className="flex items-center gap-2 text-primary">
        <Icons.message className="size-5" />
        <span className="font-semibold text-sm">Reply</span>
      </div> */}
    </div>
  );
};
